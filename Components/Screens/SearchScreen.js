import React from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import {Avatar, Text,  List, ListItem } from 'react-native-elements';

import { connect } from 'react-redux';

// export default class SearchScreen extends React.Component {
class SearchScreen extends React.Component {


 render() {

   // Here, I am using a fictive database with relevant keys nonetheless
   // Do not forget to separate the first name from the name, as well as changing the emails
   var users = [
     { firstName: "Emilie", name:"Carpenter", title: "EC", email: "contac1t@gmail.com", company: "Deckow-Crist", color: "#e67e22"},
     { firstName: "John", name:"Doe", title: "JD", email: "contact2@gmail.com", company: "Deckow-Crist", color: "#3498db"},
     { firstName: "Noel", name: "Paganelli", title: "NP", email: "contact3@gmail.com", company: "Deckow-Crist", color: "#16a085"}
   ]

   // Using ES6 syntax, I can map over users, to set a usersList Array, with a unique i key for each user
   var usersList = users.map((user, i) => {

     return (
       <ListItem
         onPress={() => this.props.handleContact(user.name, user.firstName, user.email, user.company)}
         key={i}
         avatar={
           <Avatar
             small
             rounded
             title={user.firstName[0] + user.name[0]}
             overlayContainerStyle={{backgroundColor: '#16a085'}}
           />
         }
         title={user.firstName + ' ' + user.name}
         subtitle={
           <View style={styles.subtitle}>
             <Text style={styles.ratingText}>{user.email}</Text>
             <Text style={styles.ratingText}> company: {user.comany}</Text>
           </View>
         }
       />
   )
   })


   return (
     <ScrollView style={styles.container}>

     <SafeAreaView>

       <List>

         {usersList}

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




// My new container component
function mapDispatchToProps(dispatch) {
  return {
    handleContact: function(nameContact, firstNameContact, emailContact, companyNameContact) {
        dispatch({
          type: 'addcontact',
          name: nameContact,
          firstName: firstNameContact,
          email: emailContact,
          company: companyNameContact
        })
    }
  }
}

export default connect(
    null,
    mapDispatchToProps
)(SearchScreen);
