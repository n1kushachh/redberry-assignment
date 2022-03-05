console.log("IT WORKS")

var nextBtn = document.getElementsByClassName("next")[0];

function validateForm() {
    // Initializing HTML objects
    let firstNameForm = document.forms["personal-form"]["firstName"].value
    let lastNameForm = document.forms["personal-form"]["lastName"].value
    let emailForm = document.forms["personal-form"]["eMail"].value
    let phoneNumberForm = document.forms["personal-form"]["phoneNumber"].value

    if( firstNameForm == "" || lastNameForm == "" || emailForm == "" | phoneNumberForm == "" ) {
        alert("Everything must be filled out!")
    } else if ( firstNameForm.length < 2 || lastNameForm.length < 2 || emailForm.length < 2 ) {
        alert("First name, Last name, Email -- Length couldn't be less than 2 characters!!!!")
    } else {
        alert("Done")
        return true
    }
}

nextBtn.addEventListener("click", validateForm);