export default function (contactList = [], action) {
  if (action.type === 'addcontact') {
    console.log(action)
    var contactListCopy = [...contactList];
    var isUserExist = false;

    // Here, I am using the email key, to check if yes or no I might have allready pushed a specific Item. If yes, I do not want to push it again...
    for (var i = 0; i < contactListCopy.length; i++) {
      if (contactListCopy[i].email === action.email) {
        isUserExist = true;
        return contactList;
      }
    }

    // If the item was never pushed, then...
    if (!isUserExist) {

      // adding a specific color to the pushed item
      var colorNbr = Math.random();
      var color;
      if (colorNbr < 0.25) {
        color = '#e67e22';
      } else if (colorNbr < 0.5) {
        color = '#3498db';
      } else if (colorNbr < 0.75) {
        color = '#16a085';
      } else {
        color = '#e74c3c';
      };

      // pushing the item
      contactListCopy.push({
        name: action.name,
        firstName: action.firstName,
        email: action.email,
        company: action.company,
        color: color,
      });
      return contactListCopy;
    }
  } else {
    return contactList;
  }
};
