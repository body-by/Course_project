import { refreash } from '/js/countInCart.js';

//cart
let cart = {};


const renderCart = () => {
    cart = JSON.parse(localStorage.getItem('list')) || [];
    let out = ' ';
    for(let key in cart){
        
            out += `
            <tr> 
            <th class="th_product">
             <div  class="th_product_container">
              <div class="th_image_box">
               <img class="th_image " src="${cart[key]['img1']}"></div>
             <div>
               <span class="th_info_header">${cart[key]['name']}</span>
               <div class="but_remove" >
                <img src="../assets/vectors/trash_icon.svg" class="but_remove_svg delete" data-id = "${key}">
                <span style="font-size: 12px;"  class="delete" data-id = "${key}">Remove</span> </div></div>
             </div></th>
            <th class="th_quantity">
             <div class="th_quantity_cont" >
               <button class="th_quantity_but plus" data-id = "${key}">+</button>
               <span style="text-align: center;">${cart[key]['count']}</span>
               <button class="th_quantity_but minus" data-id = "${key}"> – </button> </div>
            </th>
            <th class="th_price"> 
             <span class="th_info_header">${cart[key]['price']}</span>
            </th> 
            </tr>
            `;
        
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

document.querySelector('.target').addEventListener('click', event => {
    
    if (event.target.classList.contains('plus')){
        let articul = event.target.dataset['id'] ;
        if(cart[articul] !== undefined) {
            cart[articul]['count']++;
        }
        else{
            cart[articul] = cia_list[articul];
            cart[articul]['count'] = 1;
        }
        console.log(cart);
        localStorage.setItem('list', JSON.stringify(cart) );
        sum(cart);
        renderCart();
        refreash();
    }
    if (event.target.classList.contains('minus')){
        let articul = event.target.dataset['id'] ;
        if(cart[articul]['count'] > 1) {
            cart[articul]['count']--;
        }
        else{
            delete cart[articul];
        }
        console.log(cart);
        localStorage.setItem('list', JSON.stringify(cart) );
        sum(cart);
        renderCart();
        refreash();
        
    }
    if (event.target.classList.contains('delete')){
        let articul = event.target.dataset['id'] ;
        delete cart[articul];
        console.log(cart);
        localStorage.setItem('list', JSON.stringify(cart) );
        sum(cart);
        renderCart();
        refreash();
    }
})

