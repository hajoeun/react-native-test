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

const jsCode = `document.getElementsByTagName('html')[0].classList.add('android_app');`

export default class WebViewTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentURL: 'http://joeun.me/react-native-test/page01'
    }
  }

  componentWillMount() {
    this.naviDetector = (e) => {
      var { url } = e;
      console.log(url);
      if (url !== this.state.currentURL && url !== 'http://joeun.me/react-native-test/page04') {
        Linking.openURL(url);
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
          injectedJavaScript={jsCode}
          source={{url: this.state.currentURL}}
          style={{flex:1}}
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
    marginTop: 20
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
