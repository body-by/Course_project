import { refreash } from '/js/countInCart.js';

//cart
let cart = {};


const renderCart = () => {
    cart = JSON.parse(localStorage.getItem('cia_list')) || [];
    let out = ' ';
    for(let key in cart){
        for(let i = 0; i < cart[key]['count']; i++){
            out += `
            <tr> 
                <th class="th_product">
                <div  class="th_product_container">
                <div class="th_image_box">
                <img class="th_image " src="${cart[key]['img1']}"></div>
                <div>
                <span class="th_info_header">${cart[key]['name']}</span>
            
                
                
                <th class="th_price"> 
                <span class="th_info_header">${cart[key]['price']}</span>
                </th> 
            </tr>
            `;
    }
    }  
    document.querySelector('.target').innerHTML = out;
}
const sum = (cart) => {
    let sumA =  0;
    let sumB =  0;
    for(let key in cart){
        let float = parseFloat(cart[key]['price'].substring(1));
        sumB = float;
        let count = parseFloat(cart[key]['count']);

        sumB *= count;
        sumA += sumB
    }
    document.querySelector('.total').innerHTML = `${'$' + sumA}`;
    
    sumA =  0;
    sumB =  0;
    for(let key in cart){
        let float = parseFloat(cart[key]['price2'].substring(1));
        sumB = float;
        let count = parseFloat(cart[key]['count']);

        sumB *= count;
        sumA += sumB
    }
    document.querySelector('.subprice').innerHTML = `${'$' + sumA}`;
}
renderCart();
sum(cart);
refreash();
