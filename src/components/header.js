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
  Button
} from 'react-native';
import {employeeUpdate} from '../actions/employeeAction.js';
import {connect } from 'react-redux';

export class Header extends Component {

  onButtonPress=()=>{
    this.props.employeeUpdate();
  }

  render() {
    return (
      <View>
        <Text>
          Welcome to Header {this.props.username}
        </Text>
        <Button
          onPress={this.onButtonPress}
          title="This looks great!"
          accessibilityLabel="This sounds great!"
          />
      </View>

    );
  }
}


const mapStateToProps = (state) =>{
  const {username} = state.loginReducer
  return {username};
};

export default connect(mapStateToProps, {
  employeeUpdate
})(Header);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
