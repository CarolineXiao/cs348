$(document).ready(() => {
    document.getElementById('date').innerHTML = new Date().toDateString();

    var mysql = require('mysql');

    var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
    });

    con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    });
})