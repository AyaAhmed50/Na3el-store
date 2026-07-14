// ************************* Header **********************



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
                <div class="h-[30rem] border-1 border-gray-300 rounded-md duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl overflow-hidden">
                    <img src="${product.img}" alt="" srcset="" class="h-[60%] w-full rounded-t-sm duration-200 hover:scale-105 hover:origin-center">
                    <!-- product-info -->
                    <div class="w-1/2 m-auto py-4 space-y-2">
                        <h3 class="text-xl font-semibold" ${product.name}>Golden Watch</h3>
                        <p>Price: ${product.price}$</p>
                        <p>Category: ${product.category}</p>
                        <div class="space-x-2">
                            <i class="fa-solid fa-heart hover:cursor-pointer" id="favourite"></i>
                            <button class="p-2 border-1 rounded-sm bg-blue-500 text-white hover:bg-blue-600 hover:cursor-pointer my-2"  id="product-cart">Add to Cart</button>
                        </div>
                    </div>
                </div>`
        rowProducts.insertAdjacentHTML('beforeend',productCard)
    });
}
showProducts(products);



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

