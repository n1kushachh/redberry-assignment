console.log("IT WORKS")



// api



const api_url = "https://bootcamp-2022.devtest.ge/api/skills"
async function getISS(){
    const response = await fetch(api_url);
    const data = await response.json();
    if(document.getElementsByClassName("form-input-skill dropdown").length >= 1){
        for(i=0; i<data.length; i++){
            let node = document.createElement("option");
            let textNode = document.createTextNode(data[i]["title"]);
            node.appendChild(textNode);
            document.getElementById("skill-dropdown").appendChild(node);
        }
    }
    
}

getISS();






//personal info page

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


//technical info page

// function dropdown(){
//     let dropdownBtn = document.getElementsByClassName("dropdown-icon")[0]
//     let dropdownMenu = document.getElementsByClassName("dropdown-menu")[0]
//     let dropdownItem = document.getElementsByClassName("dropdown-item")
    
//     dropdownBtn.addEventListener("click", () => {
//         if(document.getElementsByClassName("dropdown-menu")[0].style.display === ""){
//             document.getElementsByClassName("dropdown-menu")[0].style.display = "block"
//         } else {
//             document.getElementsByClassName("dropdown-menu")[0].style.display = ""
//         }
//     })
// }




function validateTechInfo(){
    if(document.getElementById("skill-dropdown").value == "selectLanguage" || document.getElementById("experience").value == "" ){
        window.alert("Fill in everything please!")
    } else {
        let div = document.createElement("div");
        let skillValue = document.getElementById("skill-dropdown").value
        let yearValue = document.getElementById("experience").value
        div.className = "chosen-language"
        div.id = "rendered-div"

        let p = document.createElement("p")
        p.className = "render-p"
        p.innerHTML = skillValue
        div.appendChild(p)

        let h2 = document.createElement("h4")
        h2.className = "render-h2"
        h2.innerHTML = `Years of Experience - ${yearValue}`
        div.appendChild(h2)


        document.getElementById("technical-skill-info").appendChild(div);
        
    }
}
