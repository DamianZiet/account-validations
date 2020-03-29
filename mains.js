const firstName = document.getElementById('firstName')
const userName = document.getElementById('username')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const email = document.getElementById('email')
const form = document.getElementById('form')
const green = '#4CAF50';
const red = '#F44336';

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkInputs()
});

function checkInputs(){
    
    const userNameValue = userName.value.trim() ;

    const emailValue = email.value.trim()

    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim();



    if(userNameValue === ''){
        setErrorFor(userName, ' Username cannot be blank')
    } else {
        setSuccesFor(userName)
    }
    if(emailValue === ''){
        setErrorFor(email, ' Username cannot be blank')
    } else if( !isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid')
    } else {
        setSuccesFor(email)
    }
    if(passwordValue === ''){
        setErrorFor(password, ' Username cannot be blank')
    } else {
        setSuccesFor(password )
    }
    if(password2Value === ''){
        setErrorFor(password2, ' Username cannot be blank')
    } else if(passwordValue  !==password2Value){
        setErrorFor(password2, ' Passwords does not match')

    }
    
    else{
        setSuccesFor(password2 )
    }
}

function setErrorFor(input, message){
    console.log(input)
    const small = document.querySelector('small');
    small.innerText = message;

    input.parentElement.className= 'form-control error'

    
}

function setSuccesFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;

    formControl.className= 'form-control success'

}


function isEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const rotateDiv = document.querySelector('img')

let rot = 0;

setInterval(function(){
    rot++;
    rotateDiv.style.transform = `rotate(${rot+"deg"})`;
},90)


function schowForm(){

}
