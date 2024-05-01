function generateTable() {
    var number = parseInt(document.getElementById("number").value);
    var table = document.getElementById("table");
  
    // Clear existing table
    table.innerHTML = "";
  
    // Generate multiplication table
    for (var i = 1; i <= 10; i++) {
      var row = table.insertRow();
      var cell1 = row.insertCell();
      var cell2 = row.insertCell();
      cell1.innerHTML = number + " x " + i;
      cell2.innerHTML = number * i;
    }
  }
  