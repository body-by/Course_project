document.getElementById("copyButton").addEventListener("click", function() {
    // Создание временного элемента для копирования текста
    var tempInput = document.createElement("input");
    // Установка значения для временного элемента (в данном случае, текущий URL)
    tempInput.value = window.location.href;
    // Добавление временного элемента на страницу
    document.body.appendChild(tempInput);
    // Выбор текста внутри временного элемента
    tempInput.select();
    // Копирование текста в буфер обмена
    document.execCommand("copy");
    // Удаление временного элемента
    document.body.removeChild(tempInput);


    var notification = document.getElementById("notification");
    notification.classList.add("show"); // Добавляем класс "show"
    setTimeout(function() {
        notification.classList.remove("show"); // Убираем класс "show" через 2 секунды
    }, 2000);

});