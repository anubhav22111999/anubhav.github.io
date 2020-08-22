document.addEventListener("DOMContentLoaded", function() {
 fields.firstName = document.getElementById('firstName');
 fields.lastName = document.getElementById('lastName');
 fields.email = document.getElementById('email');
 fields.subject = document.getElementById('subject');
 fields.question = document.getElementById('question');
})

function isNotEmpty(value) {
 if (value == null || typeof value == 'undefined' ) 
 	  return false;
 else {
 	  return true;
}
}


function isEmail(email){
	let regx= /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9]{0,61}[a-zA-Z0-9])?)*$/;
	return regx.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
 if (field == null) return false;

 let isFieldValid = validationFunction(field.value)
 if (!isFieldValid) {
      field.className = 'placeholderRed';
 } else {
      field.className = '';
 }
 return isFieldValid;
}

function isValid() {
 var valid = true;
 
 valid &= fieldValidation(fields.firstName, isNotEmpty);
 valid &= fieldValidation(fields.lastName, isNotEmpty);
 valid &= fieldValidation(fields.email, isEmail);
  valid &= fieldValidation(fields.subject, isNotEmpty);
 valid &= fieldValidation(fields.question, isNotEmpty);
 return valid;
}
class User {
 constructor(firstName, lastName,email, subject, question) {
 this.firstName = firstName;
 this.lastName = lastName;
 this.email = email;
 this.subject = subject;
 this.question = question;
 }
}
function validate(){
	if(isValid()){
		let usr = new User(firstName.value, lastName.value, email.value, subject.value);
		alert('${usr.firstName}'thanks for shareing your valuable Feedback');
	} else{
		alert("There was an error")
	}
}