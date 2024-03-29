let email = document.getElementById('exampleInputEmail1');
let password = document.getElementById('exampleInputPassword1');
let btn = document.getElementById('btn');
let eye = document.getElementById('eye');
let emailPara = document.getElementById('email-para');
let passPara = document.getElementById('pass-para');

        emailPara.innerText = '';
        passPara.innerText = '';

btn.addEventListener('click', () => {
    if(email.value == 'user@user.com' && password.value == 'user'){
        window.location.assign('index.html')
    }else if(email.value !== 'user@user.com' && password.value == 'user'){
        emailPara.innerText = 'Please Enter valid email';
        passPara.innerText = '';
        
    }else if(email.value == 'user@user.com' && password.value !== 'user'){
        passPara.innerText = 'Please Enter valid password';
        emailPara.innerText = '';
    }
    else{
        emailPara.innerText = 'Please Enter valid email';
        passPara.innerText = 'Please Enter valid password';
    }
})

eye.addEventListener('click', () => {
    if(password.type == 'password'){
        password.type = 'text'
        eye.icon = 'el:eye-open'
    }else{
        password.type = 'password'
        eye.icon = 'el:eye-close'
    }
})