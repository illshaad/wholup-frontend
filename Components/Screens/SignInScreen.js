import React from 'react';
import { View, Text } from 'react-native';
import {Button, FormLabel, FormInput, FormValidationMessage, Divider} from 'react-native-elements';

import { connect } from 'react-redux';

import url from '../../config';

class SignInScreen extends React.Component {

constructor(){
  super()
  this.state = {
    email: '',
    password: '',
    errorMessage: ''
  }
}

handleSumbit = () => {

  console.log('signin from front handled...');

  fetch(`${url}/signin?email=${this.state.email}&password=${this.state.password}`)
  .then((res, err)  => res.json() // only one element to return so no need to add {} and no need to use the key word return
  ).then(data => {
    console.log(data)
      data.isUserExist
        ? (
            console.log("ok"),
            this.props.handleUserValid(data.user.last_name, data.user.first_name, data.user.email),
            this.props.navigation.navigate('Account')
          )
        : this.setState({errorMessage: 'Wrong credentials, try again...'})
  }).catch(err => {
    console.log(err)
  })
}

  render() {
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>

        <FormLabel>Email</FormLabel>
        <FormInput
          onChangeText={(e) => this.setState({email: e})}/>

        <FormLabel>Password</FormLabel>
        <FormInput
          onChangeText={(e) => this.setState({password: e})}/>

        <Divider style={{height:20}}/>
        <FormValidationMessage>{this.state.errorMessage}</FormValidationMessage>

        <Button
          style={{width:100, marginTop:20}}
          title ="Sign In"
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
)(SignInScreen);
