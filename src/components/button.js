/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  View
} from 'react-native';

export default class Input extends Component {

  action=()=>{
    this.props.onButtonPress();
  }

  render() {
    return (
      <Button
        title={this.props.title}
        onPress = {this.action}
        />
    );
  }
}

const styles = StyleSheet.create({
  inputTag:
  {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
