/*
	Description: This program validates the forms found in contact.html beyond the
	standard html validation found in html forms. Also handles redirecting the
	user to the homepage once they press submit. (in a very bodge way)

	Author: Illia Sergeyev
*/

// returns true if the entered string is ONLY alphabetic
function isAlpha(stringToTest){
	return /^[A-Za-z]+$/.test(stringToTest);
}

// main function used to validate the titular form
function validate()
{
    let firstName = document.forms["contactform"]["firstname"].value;
    let lastName = document.forms["contactform"]["lastname"].value;
	let reason = document.forms["contactform"]["reason"].value;

	// the first and last names MUST be at least 2 characters long
    if(firstName.length < 2 || lastName.length < 2){
		alert("First and last names must be at least 2 characters.");
		return false;
    }

	// the first and last names MUST also have only alpabetic characters
    else if (!isAlpha(firstName) || !isAlpha(lastName)){
		alert("Your name may only include alphabetic characters.");
		return false;
	}

	// if the form is valid, redirect to home page.
	else{
		// change alert message dependinng on reason chosen
		if (reason == "feedback"){
			alert("Thank you for your feedback! We will email you shortly.");
		}
		else if (reason == "techsupport"){
			alert("We will email you shortly.");
		}
		// redirect to home page
		document.location = '../index.html';
		// alert is here because there is once again, a vengeful spirit in the code D:
		// i think it shows up on chromium browsers, and gets interupted in firefox based browsers
		alert("Now sending you to home page.");
		return true;
	}
}
