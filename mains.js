const firstName = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');
const form = document.getElementById('form');
const seaImg= document.querySelector('.sea');
const btn = document.querySelector('button');
const container = document.querySelector('.container');
const errorText = [...document.querySelectorAll('errorText')];
const green = '#4CAF50';
const red = '#F44336';

gsap.from(container, {opacity:0, duration:1,y:-200+"%"});

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        checkName()
        changeEmail()
        checkPassword()
        confirmPassword()
        if(checkName()  && changeEmail() && checkPassword() && confirmPassword())
        {  
        gsap.to(container, { duration:2,y:-100+"%",stagger: 0.6, delay:.1});
        gsap.to(".containerTwo", {display:"block", duration:2,y:-100+"%",stagger: 0.6, delay:.1});   
        }
    })
  
    function checkName(){
        const index = errorText[0];
        if(firstName.value.trim() === '' ){
        erorrValid(firstName,index)
        return false
        } 
        const regEx = /^[a-zA-Z0-9]{1,15}$/;
        if(!firstName.value.match(regEx)) {
            regExName(firstName,index)
            return false
        }
        if(firstName.value.match(regEx)) {
            goodRexEpName(firstName)
            return true
        }
        return 
    }
 
    function checkPassword(){
        const index = errorText[2]
        if(password.value.trim() === ''){
            erorrValid(password,index.textContent = 'Pole nie może być puste')
            return false
        } 
        if(!lengthPassword(password,4,100)) 
        return false
        const regEx =  (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{4,}$/);
        if(!password.value.match(regEx)) {
            regExPassword(password,index);
            return false
        }
        if(password.value.match(regEx)) {
            goodRexExPassword(password);
            return true
        }
        return
    }

    function confirmPassword(){
        if(password2.value.trim() === ''){
            erorrValid(password2, errorText[3].textContent = 'Pole nie może być puste')
            return false
        }
        if(password.value === password2.value){
            goodValid(password)
            goodValid(password2)
            return true
        } else {
            erorrValid(password2, errorText[3].textContent = 'źle powtórzone hasło')
            return false
        }
    }

    function changeEmail(){
        const index = errorText[1]
        if(email.value.trim() === ''){
            erorrValid(email,index)
            return false
        } 
        const regEx = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if(!email.value.match(regEx)){
            regExEmail(email,index)
            return false
        }
        if(email.value.match(regEx)){
            goodRexExEmail(email)
            return true
        }
        return true
    }

    function regExName(firstName,index){
        erorrValid(firstName,index.textContent = 'Tylko litery i liczby maksymalnie do 15 znaków')
        return 
    }
    function regExPassword(password,index){
        erorrValid(password,index.textContent = 'Hasło musi zawierać co najmniej jedną dużą literę, małą literę i jedną cyfrę') 
        return 
    }
    function regExEmail(email,index){
            erorrValid(email, index.textContent = 'Nie poprawny mail') 
            return       
    }
    function lengthPassword(password,min,max){
        if(password.value.length<min){
         erorrValid(password, errorText[2].textContent = 'Pole musi posiadać więcej niż 4 znaki');
         return false
        }
        if(password.value.length>max){
            erorrValid(password, errorText[2].textContent = 'Pole musi posiadać mniej niż 100 znaków')
        }
        return true
    }
    function erorrValid(input,index){
        input.parentElement.className= 'form-control error';
        index.textContent = 'Pole nie może być puste';
    }   
    function goodValid(input){
        input.parentElement.className= 'form-control success';
    }
    function goodRexEpName(firstName){
        goodValid(firstName)
        return
    }
    function goodRexExEmail(email){
        goodValid(email)
        return
    }
    function goodRexExPassword(password){
        goodValid(password)
        return
    }
