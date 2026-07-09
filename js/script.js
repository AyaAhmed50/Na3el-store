let loggedIN = (localStorage.getItem('LoggedIN')==='true') || false
let userLogged = localStorage.getItem('userLogged')
let logout_btn = document.querySelector('#logout_btn')
let user_data = document.querySelector('#user_data')
let guest_bar = document.querySelector('#user-unlogged')

if(loggedIN){
    user_data.classList.replace('hidden', 'flex')
    guest_bar.classList.add('hidden')
}

logout_btn.addEventListener('click', ()=>{
    localStorage.setItem('LoggedIN',false)
    user_data.classList.replace('flex', 'hidden')
    guest_bar.classList.remove('hidden')
    window.location = 'index.html'
})