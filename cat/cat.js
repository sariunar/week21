/*3. Найдите форму владельцев котиков (задание 1 недели 18) или сверстай новую. При нажатии на кнопку “Отправить” отправляй данные формы через объект **FormData** на сайт [https://httpbin.org/post](https://httpbin.org/post) через POST запрос. */
btn.onclick = function (e) {
    e.preventDefault();

    fetch("https://httpbin.org/post",
        {
            method: 'POST',
            body: new FormData(formElem)
        })
        .then(response => response.json())
        .then(user => {
            console.log(user);
        })
        .catch(error => console.log(error));
}