/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View
} from 'react-native';

export default class Input extends Component {


  updateTextBoxValue=(event)=>{
      this.props.onChange(event.nativeEvent.text);
  }

  render() {
    return (
      <TextInput
        style={styles.inputTag}
        placeholder = {this.props.placeholder}
        placeholderTextColor = {"black"}
        onChange = {this.updateTextBoxValue}
        value={this.props.value}
        secureTextEntry = {this.props.secureTextEntry}
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
