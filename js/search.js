document.querySelector('#elastic').oninput = function () {
    let val = this.value.trim();
    
    let elasticItems = document.querySelectorAll('.elementAlsoYouLike'); // Выбираем все блоки с классом 'elementAlsoYouLike'
    
    elasticItems.forEach(function (elem) {
        let itemName = elem.querySelector('.spanItemName'); // Находим элемент с классом 'spanItemName' внутри текущего блока
        if (itemName) { // Проверяем, был ли найден элемент с классом 'spanItemName'
            if (itemName.innerText.toLowerCase().includes(val.toLowerCase())) { // Проверяем, содержит ли текст элемента введенное значение
                elem.classList.remove('hide'); // Если содержит, удаляем класс 'hide' для отображения блока
            } else {
                elem.classList.add('hide'); // Если не содержит, добавляем класс 'hide' для скрытия блока
            }
        }
    });
}
