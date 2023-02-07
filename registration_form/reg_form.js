const symbol = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input_email = document.getElementById("inputEmail");
let input_tel = document.getElementById("tel");

function isEmailValid(value) {
    return symbol.test(value);
}

function onInput() {
    if (isEmailValid(input_email.value)) {
        input_email.style.borderBottom = '2px solid green';
    } else {
        input_email.style.borderBottom = '2px solid red';
    }
}
input_email.addEventListener('input', onInput);

input_tel.addEventListener('focus', _ => {
    if (!/^\+\d*$/.test(input_tel.value))
        input_tel.value = '+';
});
input_tel.addEventListener('keypress', e => {
    if (!/\d/.test(e.key))
        e.preventDefault();
});

function focusFirstName() {
    document.getElementById('first_name').style.borderBottom = "2px solid #fc0";
}
function blurFirstName() {
    document.getElementById('first_name').style.borderBottom = "1px solid rgb(190, 190, 190)";
}
function focusLastName() {
    document.getElementById('last_name').style.borderBottom = "2px solid #fc0";
}
function blurLastName() {
    document.getElementById('last_name').style.borderBottom = "1px solid rgb(190, 190, 190)";
}
function focusEmail() {
    document.getElementById('inputEmail').style.borderBottom = "2px solid #fc0";
}
function blurEmail() {
    document.getElementById('inputEmail').style.borderBottom = "1px solid rgb(190, 190, 190)";
}
function focusPassword() {
    document.getElementById('inputPassword').style.borderBottom = "2px solid #fc0";
}
function blurPassword() {
    document.getElementById('inputPassword').style.borderBottom = "1px solid rgb(190, 190, 190)";
}
function focusPasswordTwo() {
    document.getElementById('inputPasswordTwo').style.borderBottom = "2px solid #fc0";
}
function blurPasswordTwo() {
    document.getElementById('inputPasswordTwo').style.borderBottom = "1px solid rgb(190, 190, 190)";
}
function focusTel() {
    document.getElementById('tel').style.borderBottom = "2px solid #fc0";
}
function blurTel() {
    document.getElementById('tel').style.borderBottom = "1px solid rgb(190, 190, 190)";
}


function sendForm() {
    let firstname = document.getElementById("first_name").value;
    let lastname = document.getElementById("last_name").value;
    let inputEmail = document.getElementById("inputEmail").value;
    let inputPassword = document.getElementById("inputPassword").value;
    let inputPasswordTwo = document.getElementById("inputPasswordTwo").value;
    let tel = document.getElementById("tel").value;
    document.getElementById('errorMessage').innerHTML = '';
    if (firstname === '' || lastname === '' || inputEmail === '' || inputPassword === '' || inputPasswordTwo === '' || tel === '') {
        document.getElementById('errorMessage').innerHTML += "Не все поля ввода заполнены!<br><br>";
    }
    else {
        document.getElementById('errorMessage').innerHTML += `Добро пожаловать, ${firstname}!<br><br>`;
    }

    if (inputPassword !== inputPasswordTwo) {
        document.getElementById('errorMessage').innerHTML += `Пароли должны совпадать.<br><br>`;
    }

    let user = {
        first_name: firstname,
        last_name: lastname,
        email: inputEmail,
        password: inputPassword,
        tel: tel,
    };
    fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    })
        .then((response) => response.json())
        .then(user => {
            console.log(user);
        })
        .catch((error) => console.log(error));
}

button.addEventListener('click', (event) => {
    event.preventDefault();
    sendForm();
})
