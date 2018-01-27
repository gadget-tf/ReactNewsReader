import React from 'react';
import { StyleSheet,
  Text, View, FlatList, Image, Dimensions,
  ActivityIndicator, TouchableHighlight, WebView } from 'react-native';

class DetailScreen extends React.Component {
  state = {
    url: '',
  }

  componentWillMount() {
    const {params} = this.props.navigation.state;
    this.setState({url: params.url});
  }

  render() {
    return (
      <WebView source={{uri: this.state.url}}>
      </WebView>
    );
  }
}

export default DetailScreen;
