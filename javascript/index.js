$(document).ready(() => {
    document.getElementById('date').innerHTML = new Date().toDateString();
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const newdate = year + "-" + month + "-" + day;

    $.get(`http://localhost:8081/menu`, function(data, status){
        console.log(data);
        console.log(status);
      });

      $.post(`http://localhost:8081/menu/insert`,
      {
        firstName: "Donald",
        lastName: "Duck",
        workDept: "Fin",
        hireDate: newdate
      },
      function(data, status){
        console.log(data);
      });

})