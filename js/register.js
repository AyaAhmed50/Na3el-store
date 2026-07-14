const users = JSON.parse(localStorage.getItem("users")) || {};


// Register Page Code

let Email_Register = document.querySelector('#email-register')
let pass_Register = document.querySelector('#password-register')
let firstName = document.querySelector('#first-name')
let lastName = document.querySelector('#last-name')
let Register_submit = document.querySelector('#register')

Register_submit.addEventListener('click', (e)=>{
    e.preventDefault()
    if(Email_Register.value ==="" || pass_Register.value === "" || firstName.value === "" || lastName.value === ""){
        alert("please fill the data")
    }else{
        if(users[Email_Register.value]){
            alert('This Account is Already Registered')
            setTimeout(()=> window.location = 'login.html',
        1500)
        }else{
            users[Email_Register.value] = {password: pass_Register.value,
                                first:firstName.value,
                                last:lastName.value}
            localStorage.setItem('users', JSON.stringify(users))
            localStorage.setItem('cart', JSON.stringify({}))
            localStorage.setItem('favourite',JSON.stringify({}))
            setTimeout(() => window.location = 'login.html',
                    2000)
        }
    }
})