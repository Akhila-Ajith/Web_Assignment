//document addEventListener
document.addEventListener('DOMContentLoaded',function(){

    //Content
    const form=document.getElementById('frmRegistration');
    const nameInput=document.getElementById('txtFullName');
    const emailInput=document.getElementById('txtEmail');
    const phoneInput=document.getElementById('numPhone');
    const pwdInput=document.getElementById('pwd');
    const pwdconfirmed=document.getElementById('pwdConfirmed')
    //Error message
    const nameError=document.getElementById('fullNameError');
    const emailError=document.getElementById('emailError');
    const phoneError=document.getElementById('phoneError');
    const passwordError=document.getElementById('passwordError');
    const passwordConfirmedError=document.getElementById('passwordConfirmedError');

    form.addEventListener('submit',function(event){

        //prevent form submission
        event.preventDefault();
        //Validation -fullname
        if(!nameInput.value.trim()){
            nameError.textContent='Name is required';

        }
        else{
          
            nameError.textContent='';
        }
        //email validation to see whether email is given and to check email format using regex
            var uemail=emailInput.value;
            //console.log (uemail);
        var mailformat =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        
        if(uemail.match(mailformat))
        {
        emailError.textContent='';
        }
        else if(!uemail.trim()){
            emailError.textContent='E-mail is required'
        }
        else
        {
        emailError.textContent='Enter a valid E-mail Address'
        }

        //phone validation to see whether phone number is given
        if(!phoneInput.value.trim()){
            phoneError.textContent='Phone Number is required'
        }
        else{
            phoneError.textContent='';
        }
        //password validation to see whether phone number is given
        if(!pwdInput.value.trim()){
            passwordError.textContent='Password is required'
        }
        else{
            passwordError.textContent='';
        }
        //confirmed password validation to see whether phone number is given
        if(!pwdconfirmed.value.trim()){
            passwordConfirmedError.textContent='This field is required'
        }
        else{
            passwordConfirmedError.textContent='';
        }

    });

//     emailInput.addEventListener('submit',ValidateEmail);
//     function ValidateEmail()
// {
//     var uemail=emailInput.value;
//     console.log (uemail);
// var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// if(uemail.match(mailformat))
// {
// emailError.textContent='';
// }
// else
// {
// emailError.textContent='Enter a valid E-mail address'
// }
// }


//phone number validation to check its length
phoneInput.addEventListener('input',checkPhone);
   function checkPhone(){
    const phInput = phoneInput.value.toString(); // 
    const length = phInput.length;
    console.log(length);
    if(length!=10){
        phoneError.textContent='Number should be 10 digits';
       

    }
    else{
        phoneError.textContent='';
    }
   }
   
   //password validation to check length
   pwdInput.addEventListener('input',function(){
    const pwd = pwdInput.value.toString(); // 
    const length = pwd.length;
    if(length<=4){
        passwordError.textContent='Password should be atleast 4 characters long';
    }
    else{
        passwordError.textContent='';
    }
   });

   //confirm password validation to see if it matches with password
   pwdconfirmed.addEventListener('input',confirmPassword); 
    function confirmPassword(){
        var pwd=pwdInput.value;
        var cfmPwd=pwdconfirmed.value;
        if(pwd!=cfmPwd){
            passwordConfirmedError.textContent='Does not match';
        }
        else{
            passwordConfirmedError.textContent='';
        }
    };


});