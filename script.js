$(document).ready(function(){
    new Typed('#type-it',{
        strings:['Student','Developer'],
        typespeed:50,
        loop:true
    });
});


const form= document.getElementById('form');
const namee= document.getElementById('namee');
const email= document.getElementById('email');
const phonee= document.getElementById('phonee');
const subject= document.getElementById('subject');
const msg= document.getElementById('msg');

const name_error= document.getElementById('name_error');
const email_error= document.getElementById('email_error');
const phone_error= document.getElementById('phone_error');
const subject_error= document.getElementById('subject_error');
const msg_error= document.getElementById('msg_error');

form.addEventListener('submit',(e)=>{
   
    var email_check=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(namee.value==''|| namee.value==null){
        e.preventDefault();
    name_error.innerHTML="Name is required";
    }
    else{
        name_error.innerHTML=" ";
    }
        if(!email.value.match(email_check)){
            e.preventDefault();
        email_error.innerHTML="Valid email is required";
    }
    else{
        email_error.innerHTML=" ";
    }
   
    
})