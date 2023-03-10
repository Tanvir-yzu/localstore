const addmore = () => {
    
    const product = document.getElementById('product-name').value;
    const quantity = document.getElementById('quantity').value;
    document.getElementById('product-name').value = "";
    document.getElementById('quantity').value = "";
    displayData(product, quantity);
    saveProductLocalStorage(product,quantity);

}
const displayData= (product,quantity)=>{
    console.log(product,quantity);
    const ul = document.getElementById('display-product');
    const li = document.createElement('li');
    li.innerHTML = `<b>${product}</b> : ${quantity}`;
    ul.appendChild(li);

}
const getlocalsotr = ()=>{
    let cart = {};
    const storCard = localStorage.getItem('catd');
    if(storCard){
        cart = JSON.parse(storCard);
    }
    return cart;
}
 const saveProductLocalStorage = (product,quantity)=>{
    const cart = getlocalsotr();
    cart[product] = quantity;
    localStorage.setItem('catd',JSON.stringify(cart));
 }
const displayLocalstroge = ()=>{
    const cart = getlocalsotr();
    for(const product in cart){
        const quantity = cart[product];
        displayData(product,quantity)
    }
}
displayLocalstroge()