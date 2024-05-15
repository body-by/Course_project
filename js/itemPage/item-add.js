import { refreash } from '/js/countInCart.js';
import { cia_list } from '/js/data_base.js';

refreash();
let count = 1 ;

document.querySelector('.count-tar').innerText = count;
let cart = JSON.parse(localStorage.getItem('list')) || [];

document.querySelector('.tar').addEventListener('click', event => {
    console.log(count);
    if (event.target.classList.contains('plus')){
        count++;
        document.querySelector('.count-tar').innerText = count;
    }
    if (event.target.classList.contains('minus')){
        if(count > 1) {
            count--;
            document.querySelector('.count-tar').innerText = count;
        }
        
    }
   
})

document.querySelector('.add').addEventListener('click', event => {

        let articul = event.target.dataset['id'] ;
        if(cart[articul] !== undefined) {
            cart[articul]['count'] += count;
        }
        else{
            cart[articul] = cia_list[articul];
            cart[articul]['count'] = count ;
        }
        console.log(cart);
        localStorage.setItem('list', JSON.stringify(cart) );
        refreash();

        var notification = document.getElementById("notificationtwo");
        notification.classList.add("show"); // Добавляем класс "show"
        setTimeout(function() {
            notification.classList.remove("show"); // Убираем класс "show" через 2 секунды
        }, 2000);
})