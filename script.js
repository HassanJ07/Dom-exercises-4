//Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.
const displayFirstName = document.getElementById('display-firstname');
const firstName = document.getElementById('firstname');
console.log(displayFirstName)
console.log(firstName)

 firstName.addEventListener('keyup', function(){
     firstName.innerText = displayFirstName.value;
               
    });  

 console.log(firstName);

//Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.
const age = document.getElementById('age');
const truth = document.getElementById('a-hard-truth');

age.addEventListener('keyup', function(){
    if (age.value >=  18){
        truth.style.visibility= 'visible'
    }
    else {
        truth.style.visibility = 'hidden'
    }
})

//Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance turn the field red) if the password is too short (less than 6 characters) or if the password and its confirmation do not match.

const pwd = document.getElementById('pwd');
const passConfirm = document.getElementById('pwd-confirm');



const passwordCheck = function(){
    if (pwd.value.length < 6)  {
        pwd.style.background = "red";
        
    }

    else{
        
        pwd.style.background = "white";
        
    }

    if (passConfirm.value.length < 6) {
        passConfirm.style.background = "red";
      
    }
    else{
        passConfirm.style.background = "white";
        
    }
    if(pwd.value !== pswd2.value){
        pwd.style.background = "red";
        passConfirm.style.background = "red";
        
    }
    else{
        pwd.style.background = "white";
        pwd.style.background = "white";
       
    }

}

passConfirm.addEventListener('keyup', function(){
    passwordCheck();
});



const darkMode= document.getElementById('toggle-darkmode');

//Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white.

darkMode.addEventListener('change', function(){
    if(darkMode.value === "dark") {
        document.body.style.background = "black"
        document.body.style.color = "white"
        
    } else {
        document.body.style.background = "white"
        document.body.style.color = "black"
       
    }
  
});