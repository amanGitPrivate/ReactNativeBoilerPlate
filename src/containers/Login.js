/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Input from '../components/input';
import Button from '../components/button';
import {loginAction} from '../actions/loginAction';
import {connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

export class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:''
    }
  }

  setUsername=(value)=>{
    this.setState({
      username:value
    })
  }

  setPassword=(value)=>{
    this.setState({
      password:value
    })
  }

  onButtonPress=()=>{
    const employeePayload = {
      "grant_type": "password",
      "username":this.state.username,
      "password":this.state.password
    }
    this.props.loginAction(employeePayload);
  }

  render() {
    return (
      <View>
        <Input placeholder = {"username"} value = {this.state.username} onChange = {this.setUsername}/>
        <Input placeholder = {"password"} value = {this.state.password} onChange = {this.setPassword} secureTextEntry={true}/>
        <Button title = {"login"} onButtonPress = {this.onButtonPress}/>
      </View>

    );
  }
}

const mapStateToProps = (state) =>{
  return {};
};

export default connect(mapStateToProps, {
  loginAction
})(Login);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    display:'none',
  },
});
