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
  View
} from 'react-native';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers  from './src/reducers';
import Login from './src/containers/Login';
import Header from './src/components/header';
import { Scene, Router } from 'react-native-router-flux';

export default class AwesomeProject extends Component {
  render() {

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store = {store}>
        <Router>
          <Scene
            key="landing"
            component={Login}
            initial
            navigationBarStyle={styles.navigationBarStyle}
            refresh={true}
          />
          <Scene
            key="header"
            component={Header}
            hideNavBar
          />
        </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  navigationBarStyle: {
    height:0,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
