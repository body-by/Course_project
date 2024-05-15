
export const refreash = () =>{
let cart = JSON.parse(localStorage.getItem('list')) || [];
let sum = 0;
for(let key in cart){
    sum += cart[key]['count']; 

}

document.querySelector('.count-target').innerHTML = sum;
}
