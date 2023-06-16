// const textarea = document.getElementById('textarea')
// const email = document.getElementById('email')
// const form = document.getElementById('form')
// const errorElement = document.getElementById('error')

// form.addEventListener('submit' , (e) => {
//     let messages = []
//     if (textarea.value === '' || textarea.value == null){
//         messages.push("Name is required")
//     }
//     if (textarea.value.lenght <= 6) {
//         messages.push('text must be longger than 6 character')
//     }
//     if (textarea.value.lenght >= 20) {
//         messages.innerText.push('text must be less than 20 character')
//     }
//     if (messages.lenght > 0){
//         e.preventDefault()
//         errorElement.innerText = messages.join(',')
//     }



//     if (email.value === '' || email.value == null){
//         messages.push("Name is required")
//     }
//     if (email.value.lenght <= 6) {
//         messages.push('email must be longger than 6 character')
//     }
//     if (email.value.lenght >= 20) {
//         messages.push('email must be less than 20 character')
//     }
    
//     if (messages.lenght > 0){
//         e.preventDefault()
//         errorElement.innerText = messages.join(',')
//     }
// })


const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')
    
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};



const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    }else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'password is required');
    } else if (passwordValue.lenght <= 8) {
        setError(password, 'password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "password doesn't match");
    } else {
        setSuccess(password2);
    }
};