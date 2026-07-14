let userLogged = localStorage.getItem('userLogged') // hold Email
let userData = JSON.parse(localStorage.getItem('users'))[userLogged] // hold total info
let loggedIN = (localStorage.getItem('LoggedIN')==='true') || false // indicate if user is online or not
let cart = JSON.parse(localStorage.getItem('cart')) || {}
let favourite = JSON.parse(localStorage.getItem('favourite')) || {}


let user_data = document.querySelector('#user_data')
let guest_bar = document.querySelector('#user-unlogged')
let UserName = document.getElementById('user-name')
let CartNumber = document.getElementById('cart-numb')
let logout_btn = document.querySelector('#logout_btn')


function showUserData(){
    if(loggedIN){
        UserName.innerText = userData.first + ' ' + userData.last
        CartNumber.innerText = Object.keys(cart).length

        user_data.classList.replace('hidden', 'flex')
        guest_bar.classList.add('hidden')
    }
}
showUserData();