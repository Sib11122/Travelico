let users = [];

let nameInp = document.getElementById('name');
let emailInp = document.getElementById('email');
let messageInp = document.getElementById('message');
let submitBtn = document.getElementById('formBtn');

submitBtn.onclick = function () {

    let user = {
        name: nameInp.value.trim(),
        email: emailInp.value.trim(),
        message: messageInp.value.trim()
    };

    if (user.name !== "" && user.email !== "" && user.message !== "") {
        users.push(user);
        alert("Thank you! Your response is recorded.");
    } else {
        alert("Please fill all fields!");
    }
};
