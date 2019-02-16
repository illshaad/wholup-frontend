import React from 'react';
import {
 View,
} from 'react-native';
import {Avatar, Text, Button} from 'react-native-elements';

import { connect } from 'react-redux';


class AccountScreen extends React.Component {


 render() {
   return (

     <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
     {/*  This notation is used to write comments within JSX code */}
     {/* flex 1 indicates the View to take the whole screen ; the alignItems and justifyContent proprieties will center horizontally and vertically the content */}

       <Avatar
         large
         title={this.props.user.firstName[0]+this.props.user.lastName[0]}
         rounded
         overlayContainerStyle={{backgroundColor:"#e67e22"}}
       />
       <Text h4>{this.props.user.firstName} {this.props.user.lastName}</Text>
       <Text h4>{this.props.user.email}</Text>


         <Button
           style={{width:150, marginTop:20}}
           title ="Disconnect"
           backgroundColor="#3498db"
           onPress={() => this.props.navigation.navigate('Home')}
         />
         {/*  As given by react navigation documentation, I can use this.props.navigation.navigate('Home') */}
         {/*  I must declare my function with an arrow function in order to temporize its execution */}


     </View>
   );
 }
}

function mapStateToProps(state) {
  return { user: state.userData }
}

export default connect(
    mapStateToProps,
    null
)(AccountScreen);


// If you want to use ES5 to declare your function, here is the syntax ;

// handleClick(){
//     this.props.navigation.navigate('Home');
// }

// <Button
//   style={{width:150, marginTop:20}}
//   title ="Disconnect"
//   backgroundColor="#3498db"
//   onPress={this.handleClick.bind(this)}
// />
