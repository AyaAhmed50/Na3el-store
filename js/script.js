let loggedIN = (localStorage.getItem('LoggedIN')==='true') || false
let userLogged = localStorage.getItem('userLogged')
let logout_btn = document.querySelector('#logout_btn')
let user_data = document.querySelector('#user_data')
let guest_bar = document.querySelector('#user-unlogged')


class Product{
    constructor(id, name, price, Category,genre, img){
        this.id = id
        this.name = name
        this.price = price
        this.Category = Category
        this.genre = genre
        this.quantity = 1
        this.favourite = false
        this.cart = false
        this.img = img
    }
}

const products = [
    new Product(1, 'Golden Watch', 400, 'Watches', 'women', 'imgs/p-1.jpg'),
    new Product(2, 'Silver necklace', 150, 'Necklace', 'men', 'imgs/p-2.jpg'),
    new Product(3, 'Golden Earrings', 200, 'Earrings', 'women', 'imgs/p-3.jpg'),
    new Product(4, 'Black Watch', 350, 'Watches', 'men', 'imgs/p-4.jpg'),
    new Product(5, 'Silver Set Rings', 580, 'Rings', 'women', 'imgs/accessories/dd94301efd4caef4e84229be9a74bf90.jpg'),
    new Product(6, 'Silver necklace', 150, 'Necklace', 'men', 'imgs/accessories/3ca518ac387b3e07aaf503b2c1399707.jpg'),
    new Product(7, 'Black bracelet', 100, 'Bracelet', 'men', 'imgs/accessories/ef169eeb1097eaa0cd21f0311524820e.jpg'),
    new Product(8, 'Set Necklace', 500, 'Necklace', 'women', 'imgs/accessories/9f5a4002bc9bdda21f05e47dc80a38df.jpg'),
    new Product(9, 'Golden set bracelet', 300, 'Bracelet', 'women', 'imgs/accessories/2a384379039c5e05bd5905edc657e93c.jpg'),
];
if(loggedIN){
    user_data.classList.replace('hidden', 'flex')
    guest_bar.classList.add('hidden')
}
logout_btn.addEventListener('click', ()=>{
    logout()
})

function logout(){
    localStorage.setItem('LoggedIN',false)
    user_data.classList.replace('flex', 'hidden')
    guest_bar.classList.remove('hidden')
    setTimeout(() => {
        window.location = 'index.html'
    }, 1500);
}

function showProducts(ProductList){

}