function loaduser() {
  let localStore = localStorage.getItem("pastRecords");
  if (localStore != null) {
    dataBase = JSON.parse(localStore);
  }
  let index = 1;
  if (dataBase != null) {
    let table = document
      .getElementById("employeeList")
      .getElementsByTagName("tbody")[0];
    table.innerHTML = "";
    for (index = 0; index < dataBase.length; index++) {
      //console.log(dataBase);

      table.innerHTML += `
                              <tr id = "${dataBase[index].ID}">
                              <td>${dataBase[index].firstName}</td>
                              <td>${dataBase[index].lastName}</td>
                              <td>${dataBase[index].email}</td>
                              <td>${dataBase[index].address}</td>
                              <td><button class = "btn btn-primary" type = "button" data-toggle = "modal" data-target = "#CRUDModal" onclick = "editRecord(this)">Edit</button>
                              <button class = "btn btn-danger type = "button" onclick = "deleteRecord(this)">Delete</button></td></tr>`;
    }
    //localStorage.removeItem("pastRecords")
  }
}

loaduser();
