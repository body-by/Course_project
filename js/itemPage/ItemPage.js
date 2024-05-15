/*Paste image*/


function changeImage(clickedImage) {
    const pasteImage = document.querySelector('#pasteImage');
    const parentElement = clickedImage.parentNode;
    const allParentElements = document.querySelectorAll('.otherImage'); // Получаем все родительские элементы всех img
    // Сброс цвета границы для всех родительских элементов всех img
    allParentElements.forEach(parent => {
        parent.style.borderColor = 'rgb(194, 194, 194)';
    });
    pasteImage.src = clickedImage.src;  // Установка нового источника для главного изображения
    parentElement.style.borderColor = '#121212';  // Изменение цвета рамки при клике
}





//change price for butt
const first_price = document.querySelector('#first_price');
const second_price = document.querySelector('#second_price');

function changeText65() {
    document.getElementById("first_price").innerHTML = "$4399.99";
    document.getElementById("second_price").innerHTML = "$4999.99";
    document.getElementById("65").style.borderColor = '#121212';
    document.getElementById("75").style.borderColor = 'rgb(194, 194, 194)';
    document.getElementById("85").style.borderColor = 'rgb(194, 194, 194)';
}

function changeText75() {
    document.getElementById("first_price").innerHTML = "$4599.99";
    document.getElementById("second_price").innerHTML = "$5599.99";
    document.getElementById("75").style.borderColor = '#121212';
    document.getElementById("65").style.borderColor = 'rgb(194, 194, 194)';
    document.getElementById("85").style.borderColor = 'rgb(194, 194, 194)';
}

function changeText85() {
    document.getElementById("first_price").innerHTML = "$4899.99";
    document.getElementById("second_price").innerHTML = "$5999.99";
    document.getElementById("85").style.borderColor = '#121212';
    document.getElementById("65").style.borderColor = 'rgb(194, 194, 194)';
    document.getElementById("75").style.borderColor = 'rgb(194, 194, 194)';
}
