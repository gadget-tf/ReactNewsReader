import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions, ActivityIndicator } from 'react-native';

class HomeScreen extends React.Component {
  state = {
    threads: [],
    isLoading: true,
  }

  componentWillMount() {
    fetch("https://www.reddit.com/r/newsokur/hot.json")
      .then((response) => response.json())
      .then((responseJson) => {
        let threads = responseJson.data.children;
        threads = threads.map(i => {
          i.key = i.data.url;
          return i;
        });
        this.setState({threads, isLoading: false});
      }).catch((error) => {
        console.error(error);
      });
  }

  render() {
    const {threads, isLoading} = this.state;
    const {width, height} = Dimensions.get('window');
    return (
      <View style={styles.container}>
        {isLoading ? <ActivityIndicator /> :
        <FlatList
          data={threads}
          renderItem={({item}) => {
            return (
              <View style={styles.listContainer}>
                <Image style={styles.thumbnailIcon} source={{uri: item.data.thumbnail}} />
                <View style={{width: width - 50}}>
                  <View style={{flex: 1, flexDirection: 'column'}}>
                    <Text>{item.data.title}</Text>
                    <Text style={{color: '#ababab', fontSize: 10}}>{item.data.domain}</Text>
                  </View>
                </View>
              </View>
            );
          }} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  thumbnailIcon: {
    width: 50,
    height: 50,
  },
});

export default HomeScreen;
