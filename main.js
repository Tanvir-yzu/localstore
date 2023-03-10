const addProduct = () => {
    const product = document.getElementById('product-name').value;
    const quantity = document.getElementById('product-quantity').value;
    showDisplay(product, quantity);
    document.getElementById('product-name').value = "";
    document.getElementById('product-quantity').value = "";
    saveProductLocalStorage(product, quantity);
}

const showDisplay = (product, quantity) => {
    const ul = document.getElementById('product-list'); // ID of the unordered list element
    const li = document.createElement('li');
    li.innerHTML = `<b>${product}</b>:${quantity}`;
    ul.appendChild(li);
}

const getStoreShoppingCart = () => {
    let cart = {};
    const storeCart = localStorage.getItem('cart');
    if (storeCart) {
        cart = JSON.parse(storeCart);
    }
    return cart;
}

const saveProductLocalStorage = (product, quantity) => {
    const cart = getStoreShoppingCart();
    cart[product] = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
}
const displayLocalstroge = ()=>{
    const cart = getStoreShoppingCart();
    //  console.log(cart);
     for( const product in cart){
        //  console.log(product,quantity);
        const quantity = cart[product];
        showDisplay(product, quantity);

     }

}
displayLocalstroge();

