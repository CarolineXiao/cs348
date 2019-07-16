$(document).ready(() => {
    console.log("doc ready");
    document.getElementById('signinSubmit').onclick = function(){
        console.log('submit');
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        document.getElementById('credential').innerHTML = "The user is " + username + ", the password is " + password;
    }
})