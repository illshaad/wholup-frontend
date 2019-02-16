import React from 'react';
import { View } from 'react-native';
import {Button, FormLabel, FormInput} from 'react-native-elements';

import { connect } from 'react-redux';

// import of my ip config
import url from '../../config';

class SignUpScreen extends React.Component {

constructor(){
  super()
  this.handleSumbit = this.handleSumbit.bind(this)
  this.state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }
}

handleSumbit(){

  console.log('signup from front handled...');

  // We can store our sent data (available in our state) in a variable called signupData
  var signupData = JSON.stringify({
    first_name: this.state.firstName,
    last_name: this.state.lastName,
    email: this.state.email,
    password: this.state.password,
  });

  // Since we are going to fetch with the ES5 syntax, we need to store this (an EST5 function has got its own this)
  const ctx = this;

  fetch(`${url}/signup`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: signupData
  }
  ).then(function(res, err){
    return res.json()
  }).then(function(data){
    console.log(data);
    ctx.props.handleUserValid(data.user.last_name, data.user.first_name, data.user.email)
    ctx.props.navigation.navigate('Account');
  }).catch(function(err){
    console.log(err)
  })
}

  render() {
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>

        <FormLabel>First Name</FormLabel>
        <FormInput
          onChangeText={(e) => this.setState({firstName: e})}/>
        <FormLabel>Last Name</FormLabel>
        <FormInput
          onChangeText={(e) => this.setState({lastName: e})}/>
        <FormLabel>Email</FormLabel>
        <FormInput
          onChangeText={(e) => this.setState({email: e})}/>
        <FormLabel>Password</FormLabel>
        <FormInput
          onChangeText={(e) => this.setState({password: e})}/>

        <Button
          style={{width:100, marginTop:20}}
          title="Sign Up"
          backgroundColor="#3498db"
          onPress={this.handleSumbit}
        />

      </View>
    )
  }
}

// My new container component
function mapDispatchToProps(dispatch) {
  return {
    handleUserValid: function(nameUser, firstNameUser, emailUser) {
        dispatch({
          type: 'setUser',
          name: nameUser,
          firstName: firstNameUser,
          email: emailUser,
        })
    }
  }
}

export default connect(
    null,
    mapDispatchToProps
)(SignUpScreen);
