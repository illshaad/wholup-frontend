import React from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import {Avatar, Text, List, ListItem } from 'react-native-elements'

import { connect } from 'react-redux';

// export default class FollowingScreen extends React.Component {
class FollowingScreen extends React.Component {


 render() {

   var contactListItem = this.props.contact.map((user, i) => {

     return (
     <ListItem
       key={i}
       avatar={
         <Avatar
           small
           rounded
           title={user.firstName[0] + user.name[0]}
           overlayContainerStyle={{backgroundColor: user.color}}
         />
       }
       title={user.firstName + ' ' + user.name}
       subtitle={
         <View style={styles.subtitle}>
           <Text style={styles.ratingText}>{user.email}</Text>
           <Text style={styles.ratingText}> company: {user.company}</Text>
         </View>
       }
     />);
   });

   // tableau.reverse() sert à inverse le sens d'affichage du tableau
   return (
     <ScrollView style={styles.container}>
      <SafeAreaView>
         <List>
           {this.props.contact.length < 1
             ? <Text style={{textAlign: 'center'}}>You are not following any contact yet</Text>
             : contactListItem.reverse()}
         </List>
    </SafeAreaView>
     </ScrollView>
   );

 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   paddingTop: 15,
   backgroundColor: '#fff',
 },
 subtitle:{
   flexDirection:'row',
   padding:10,
   paddingTop:5,
 },
 ratingText:{
   color: 'grey',
 }
});


// Now, we want to read the value contactCount we created in the store
// It means that we want to transform a value in the Redux Store (a so called state, here) into a props, to access this value everywhere I want in my components
function mapStateToProps(state) {
  return { contact: state.contactsList }
}

// I do not forget to use connect to export FollowingScreen and to use mapStateToProps
export default connect(
    mapStateToProps,
    null
)(FollowingScreen);
