
//navigational


const home2 = document.querySelector('#home2');
const homeMenu2 = document.querySelector('#homeMenu2');
const text2 = document.querySelector('#text2');
home2.addEventListener('mouseover', () =>{
    if (homeMenu2.classList.contains('droppMenuN')){
        homeMenu2.classList.remove('droppMenuN');
        homeMenu2.classList.add('droppMenu');
        text2.classList.add('text-decorationunderline');
    }
    else{
        homeMenu2.classList.remove('droppMenu');
        text2.classList.remove('text-decorationunderline');
        homeMenu2.classList.add('droppMenuN');
    }
})
home2.addEventListener('mouseout', () =>{
        homeMenu2.classList.remove('droppMenu');
        text2.classList.remove('text-decorationunderline');
        homeMenu2.classList.add('droppMenuN');
})

const home3 = document.querySelector('#home3');
const homeMenu3 = document.querySelector('#homeMenu3');
const text3 = document.querySelector('#text3');
home3.addEventListener('mouseover', () =>{
    if (homeMenu3.classList.contains('droppMenuN')){
        homeMenu3.classList.remove('droppMenuN');
        homeMenu3.classList.add('droppMenu');
        text3.classList.add('text-decorationunderline');
    }
    else{
        homeMenu3.classList.remove('droppMenu');
        text3.classList.remove('text-decorationunderline');
        homeMenu3.classList.add('droppMenuN');
    }
})
home3.addEventListener('mouseout', () =>{
        homeMenu3.classList.remove('droppMenu');
        text3.classList.remove('text-decorationunderline');
        homeMenu3.classList.add('droppMenuN');
})

