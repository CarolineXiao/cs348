
var my_response;
    var mysql = require('mysql');
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'qwer1234',
      database: 'sys'
    });
    connection.connect((err) => {
      if (err) throw err;
      console.log('Connected!');
      connection.query("SELECT * FROM test", function(err, response) {
        if (err) throw err;
        //console.log(response);
        my_response = JSON.stringify(response);
        loadTable();
        //console.log(my_response);
      });
    });
    


function loadTable() {
    //console.log(response);
    //var string = JSON.parse(my_response);
    //console.log(string[0].ClientID);
    var string = [{"ClientID":1,"Email":"deafefe","Phone":"352634","Contact Method":"phone"},{"ClientID":2,"Email":"fead","Phone":"63533","Contact Method":"phone"},{"ClientID":3,"Email":"feg","Phone":"2524","Contact Method":"phone"},{"ClientID":4,"Email":"4gdgs","Phone":"7865","Contact Method":"email"},{"ClientID":5,"Email":"wer","Phone":"25345","Contact Method":"email"},{"ClientID":6,"Email":"rrew","Phone":"63747","Contact Method":"email"}]
    //var string = my_response;
    
    var x = document.getElementById("order-table");

for(i = 0; i < string.length; i++) {	
  console.log("!");
    var row = x.insertRow(i+1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = string[i].ClientID;
    cell2.innerHTML = string[i]["Email"];
    cell3.innerHTML = string[i]["Phone"];
    cell4.innerHTML = string[i]["Contact Method"];
    cell5.innerHTML = "<th><button style=\"float:right;\"><i class=\"fa fa-trash-o\"></i></button></th> <th><button style=\"float:right;\"><i class=\"fa fa-edit\"></i></button></th>";
    

}
}