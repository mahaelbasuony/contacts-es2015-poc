let SearchOp = function (searchName, searchAgeFrom, searchAgeTo,contacts) {
  let filteredContacts = [];
  
  for (let i = 0; i < contacts.length; i++) {
    let nameToLowerCase = contacts[i].name.toLowerCase();
    if (nameToLowerCase.includes(searchName.toLowerCase()) && (contacts[i].age >= searchAgeFrom && contacts[i].age <= searchAgeTo)) {
      filteredContacts.push({ name: contacts[i].name, age: contacts[i].age });
    }
  }
  if (filteredContacts.length > 0)
    return filteredContacts;
  else
    return "Not found";

}


export default SearchOp;
