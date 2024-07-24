let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let buy =document.getElementById("buy")
let user =document.getElementById("user")


openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: ' TOMATO',
        image : 'tomato.jpg',
        price: 60.00
    },
    {
        id: 4,
        name: 'CUCMBER',
        image: 'cucumber.jpg',
        price: 90.00 
    },
    {
        id: 3,
        name: 'GREEN PEAS',
        image: 'green peas.jpg',
        price: 30.00
    },
    {
        id: 6,
        name: 'CALIFLOWER',
        image: 'califlower.png',
        price: 50.00
    },
    {
        id: 7,
        name: 'BRINJAL',
        image: 'brinjal.jpg',
        price: 80.00
    },
    {
        id: 8,
        name: 'AVACADO',
        image: 'avacado.jpg',
        price: 350.00
    },
    {
        id: 9,
        name: 'APPLES',
        image: 'apples.jpg',
        price: 23000
    },
    {
        id: 5,
        name: 'CARROT',
        image: 'carrot.jpg',
        price: 90.00
    },
    {
        id: 10,
        name: 'STRABERRY',
        image: 'straberry.jpg',
        price: 250.00
    },
    {
        id: 2,
        name: 'ORANGE',
        image: 'orange.jpg',
        price: 100.00 
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }else{
        alert("product already added");
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

buy.onclick=()=>{
    alert("your order placed");
    listCard.remove(buy.parentElement)
    total.innerText = 0;
    
}


user.onclick=()=>{
    
   let a= confirm("Do you want to logout")
    if( a==true ){
        window.open('./index.html')
    }
    else{
        alert("continue shopping")
    }
    
}
console.log(user);