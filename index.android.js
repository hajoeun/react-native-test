/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  Linking
} from 'react-native';

import WebViewAndroid from 'react-native-webview-android';

const jsCode = `document.getElementsByTagName('html')[0].classList.add('android_app');`

export default class WebViewTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentURL: 'https://www.marpple.com'
    }
  }

  componentWillMount() {
    this.naviDetector = (e) => {
      var { url } = e;
      console.log(url);
      // if (url !== this.state.currentURL && url !== 'http://localhost:4000/page04') {
      //   Linking.openURL(url);
      // }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <WebViewAndroid
          style={{flex:1}}
          source={{uri: this.state.currentURL}}
          injectedJavaScript={jsCode}
          onNavigationStateChange={this.naviDetector}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('WebViewTest', () => WebViewTest);
