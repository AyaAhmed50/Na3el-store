// Login Page
let users = JSON.parse(localStorage.getItem('users')) || {}
let email_login = document.querySelector('#email-login')
let password_login = document.querySelector('#password-login')
let login_submit = document.querySelector('#login')

login_submit.addEventListener('click', (ele) =>{
    ele.preventDefault()
    if( users[email_login.value] && (users[email_login.value].password === password_login.value)){
        alert('Login successfull')
        localStorage.setItem("LoggedIN", true)
        localStorage.setItem('userLogged', email_login.value)
        setTimeout(() => {
            window.location = 'index.html'
        }, 1500);
    }else{
        alert("Email or Password is wrong")
    }
})

