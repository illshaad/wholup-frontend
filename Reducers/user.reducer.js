export default function(user = {}, action){
  if(action.type === 'setUser'){
    console.log(action);
    var userCopy = {
      // ...user,
      firstName: action.firstName,
      lastName: action.name,
      email: action.email,
    }
    return userCopy;
  } else {
    console.log("ERREUR");
    return user;
  }
}
