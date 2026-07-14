// ************************* Header **********************
let userLogged = localStorage.getItem('userLogged') // hold Email
let userData = JSON.parse(localStorage.getItem('users'))[userLogged] // hold total info
let loggedIN = (localStorage.getItem('LoggedIN')==='true') || false // indicate if user is online or not
let cartItems = localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')) : []
let favouriteItems = localStorage.getItem('favourite')? JSON.parse(localStorage.getItem('favourite')) : []

// ************************* Header-Dom **********************
let user_data = document.querySelector('#user_data')
let guest_bar = document.querySelector('#user-unlogged')
let UserName = document.getElementById('user-name')
let CartNumber = document.getElementById('cart-numb')
let logout_btn = document.querySelector('#logout_btn')


function showUserData(){
    if(loggedIN){
        UserName.innerText = userData.first + ' ' + userData.last
        CartNumber.innerText = cartItems.length

        user_data.classList.replace('hidden', 'flex')
        guest_bar.classList.add('hidden')
    }
}
showUserData();
class Product{
    constructor(id, name, price, Category,genre, img){
        this.id = id
        this.name = name
        this.price = price
        this.category = Category
        this.genre = genre
        this.quantity = 1
        this.favourite = false
        this.cart = false
        this.img = img
    }
}

const products = [
    new Product(1, 'Golden Watch', 400, 'Watches', 'women', 'images/p-1.jpg'),
    new Product(2, 'Silver necklace', 150, 'Necklace', 'men', 'images/p-2.jpg'),
    new Product(3, 'Golden Earrings', 200, 'Earrings', 'women', 'images/p-3.jpg'),
    new Product(4, 'Black Watch', 350, 'Watches', 'men', 'images/p-4.jpg'),
    new Product(5, 'Silver Set Rings', 580, 'Rings', 'women', 'images/p-5.jpg'),
    new Product(6, 'Silver necklace', 150, 'Necklace', 'men', 'images/p-6.jpg'),
    new Product(7, 'Black bracelet', 100, 'Bracelet', 'men', 'images/p-7.jpg'),
    new Product(8, 'Set Necklace', 500, 'Necklace', 'women', 'images/p-8.jpg'),
    new Product(9, 'Golden set bracelet', 300, 'Bracelet', 'women', 'images/p-9.jpg'),
];

function showProducts(ProductList){
    let rowProducts = document.getElementById('product-container')
    rowProducts.innerHTML =''
    ProductList.forEach(product => {
        const productCard = `
            <!-- Product -->
                <div class="h-[30rem] border-1 border-gray-300 rounded-md duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl overflow-hidden" data-id =${product.id}>
                    <img src="${product.img}" alt="" srcset="" class="h-[60%] w-full rounded-t-sm duration-200 hover:scale-105 hover:origin-center">
                    <!-- product-info -->
                    <div class="w-1/2 m-auto py-4 space-y-2">
                        <h3 class="text-xl font-semibold">${product.name}</h3>
                        <p>Price: ${product.price}$</p>
                        <p>Category: ${product.category}</p>
                        <div class="space-x-2">
                            <i class="fa-solid fa-heart ${favouriteItems.some(p => p.id === product.id) && loggedIN? 'text-red-500' : 'text-gray-800'} hover:cursor-pointer" id="favourite" onclick="toggleFavourite(${product.id})"></i>
                            <button class="p-2 border-1 rounded-sm ${cartItems.some(p => p.id === product.id) && loggedIN ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'} text-white hover:cursor-pointer my-2" onclick="toggleCart(${product.id})">${cartItems.some(p => p.id === product.id) ? 'Remove from Cart' : 'Add to Cart'}</button>
                        </div>
                    </div>
                </div>`
        rowProducts.insertAdjacentHTML('beforeend',productCard)
    });
}
showProducts(products);

let search = document.getElementById('search')
search.addEventListener('click', ()=>{
    let keyword = document.getElementById('search-keyword').value.toLowerCase()
    let filter_type = document.getElementById('filter')
    let filtered_products = products.filter(p => {
        return p[filter_type.value].toLowerCase().includes(keyword)
    }) 
    setTimeout(() => {
        showProducts(filtered_products)
    }, 800);
})

function toggleFavourite(productId){
    if(loggedIN){
        let product = products.find(p => p.id == productId)
        if(favouriteItems.some(p => p.id === productId)){ // the product is already in favourite and we delete it
            favouriteItems = favouriteItems.filter(p => p.id !== productId)
            product.favourite = false
        }else{ // the product isn't in favourite and we add it
            favouriteItems = [...favouriteItems, product]
            product.favourite = true
        }
        localStorage.setItem('favourite', JSON.stringify(favouriteItems))
        showProducts(products)
    }else{
        alert('Please login to add to favourite')
        setTimeout(() => {
            window.location = 'login.html'
        }, 1500);
    }
}
function toggleCart(productId){
    if(loggedIN){
        let product = products.find(p => p.id == productId)
        if(cartItems.some(p => p.id === productId)){ // the product is already in cart and we delete it
            cartItems = cartItems.filter(p => p.id !== productId)
            product.cart = false
        }else{ // the product isn't in cart and we add it
            console.log(cartItems)
            cartItems = [...cartItems, product]
            product.cart = true
        }
        localStorage.setItem('cart', JSON.stringify(cartItems))
        updateCart()
        showProducts(products)
    }else{
        alert('Please login to add to cart')
        setTimeout(() => {
            window.location = 'login.html'
        }, 1500);
    }
}
function updateCart(){
    CartNumber.innerText = JSON.parse(localStorage.getItem('cart')).reduce((total, p) => {
        return p.cart? total + p.quantity : total;
    }, 0);
}


let sideCart = document.getElementById('side-cart')
function showSideCart(products){
    let sideContainer = document.getElementById('side-container')
    sideContainer.innerHTML = ''
    if(products.length === 0){
        sideContainer.innerHTML = '<p class="text-center text-gray-500">Your cart is empty</p>'
    }else{
        products.forEach( (product) => {
            const sideCard = `
                <div class="flex bg-gray-200 rounded-sm p-2 space-x-2 h-24">
                    <div class="w-1/2 space-y-1">
                        <p>${product.name}</p>
                        <div>
                            <button onclick="sub(${product.id})" class="border-2 px-1 rounded-md">-</button>
                            <span>${product.quantity}</span>
                            <button onclick="add(${product.id})" class="border-2 px-1 rounded-md">+</button>
                        </div>
                    </div>
                    <div class="w-1/2">
                        <p>Price : </p>
                        $<span>${product.quantity * product.price}</span>
                    </div>
                </div>
            `
            sideContainer.insertAdjacentHTML('beforeend', sideCard)
        })
    }
}
let cartSummary = document.getElementById('cart-summary')
cartSummary.addEventListener('click', (e)=>{
    sideCart.classList.toggle('hidden')
    if(!sideCart.classList.contains('hidden')){
        showSideCart(JSON.parse(localStorage.getItem('cart')))
    }
})

function add(productID){
    cartItems = JSON.parse(localStorage.getItem('cart'))
    cartItems.find(p => p.id === productID).quantity += 1
    localStorage.setItem('cart', JSON.stringify(cartItems))
    showSideCart(cartItems)
    showProducts(products)
    updateCart()
}
function sub(productID){
    cartItems = JSON.parse(localStorage.getItem('cart'))
    cartItems.find(p => p.id === productID).quantity -= 1
    cartItems = cartItems.filter(item => item.quantity !== 0)
    localStorage.setItem('cart', JSON.stringify(cartItems))
    showSideCart(cartItems)
    showProducts(products)
    updateCart()
}
function logout(){
    setTimeout(() => {
        localStorage.setItem('LoggedIN',false)
        user_data.classList.replace('flex', 'hidden')
        guest_bar.classList.remove('hidden')
        window.location = 'index.html'
    }, 1500);
}
logout_btn.addEventListener('click', ()=>{
    logout()
})


