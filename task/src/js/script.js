"use strict";
let selectedRow;
var dataBase = [];
let RowID;
function onFormSubmit() {
    //console.log("submitting...");
    if (true) {
        let formData = readFormData();
        if (selectedRow == null) {
            RowID = Math.floor(Math.random() * 100 + 10).toString();
            formData["ID"] = RowID;
            insertNewRecord(formData);
        }
        else {
            updateRecord(formData);
        }
    }
}
function readFormData() {
    let data = {};
    data["firstName"] = (document.getElementById("firstName")).value;
    data["lastName"] = (document.getElementById("lastName")).value;
    data["email"] = document.getElementById("email").value;
    data["address"] = (document.getElementById("address")).value;
    return data;
}
function insertNewRecord(data) {
    let table = (document.getElementById("employeeList")).getElementsByTagName("tbody")[0];
    //let newRecord = table.insertRow(table.length);
    table.innerHTML += `<tr id = "${data.ID}">
                            <td>${data.firstName}</td>
                            <td>${data.lastName}</td>
                            <td>${data.email}</td>
                            <td>${data.address}</td>
                            <td><button class = "btn btn-primary" type = "button" data-toggle = "modal" data-target = "#CRUDModal" onclick = "editRecord(this)">Edit</button>
                            <button class = "btn btn-danger type = "button" onclick = "deleteRecord(this)">Delete</button></td></tr>`;
    //document.forms[0].reset();
    document.getElementById("EmpForm").reset();
    dataBase.push(data);
    //dataBase[0] = formData;
    localStorage.setItem("pastRecords", JSON.stringify(dataBase));
    //console.log(document.forms)
}
function deleteRecord(td) {
    if (!confirm("Are you sure You want to delete?"))
        return;
    let rowIndex;
    selectedRow = td.parentElement.parentElement;
    RowID = selectedRow.getAttribute("id");
    var row = document.getElementById(RowID);
    row.parentNode.removeChild(row);
    dataBase.forEach((obj) => {
        Object.keys(obj).forEach((objkey) => {
            if (obj[objkey] == RowID) {
                rowIndex = dataBase.indexOf(obj);
            }
        });
    });
    //console.log(rowIndex);
    var removed = dataBase.splice(rowIndex, 1);
    //console.log(dataBase);
    localStorage.setItem("pastRecords", JSON.stringify(dataBase));
    selectedRow = null;
}
function editRecord(td) {
    //console.log("Edit Request was generated." + td);
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstName").value =
        selectedRow.cells[0].innerHTML;
    document.getElementById("lastName").value =
        selectedRow.cells[1].innerHTML;
    document.getElementById("email").value =
        selectedRow.cells[2].innerHTML;
    document.getElementById("address").value =
        selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.firstName;
    selectedRow.cells[1].innerHTML = formData.lastName;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.address;
    RowID = selectedRow.getAttribute("id");
    dataBase.forEach((obj) => {
        Object.keys(obj).forEach((objkey) => {
            // @ts-ignore: Unreachable code error
            if (obj[objkey] == RowID) {
                console.log(obj[objkey]);
                obj["firstName"] = formData.firstName;
                obj.lastName = formData.lastName;
                obj.email = formData.email;
                obj.address = formData.address;
                console.log("Updated record : " + obj.lastName);
            }
            // obj.firstName = formData.firstName;
            // obj.lastName = formData.lastName;
            // obj.email = formData.email;
            // obj.address = formData.address;
        });
    });
    selectedRow = null;
    localStorage.setItem("pastRecords", JSON.stringify(dataBase));
    document.getElementById("EmpForm").reset();
    document.forms[0].reset();
}
function search() {
    //console.log("In the search  function");
    var input, filter;
    var table;
    var tr;
    var td;
    var i, j;
    var txtValue;
    var found;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("employeeList");
    tr = table.getElementsByTagName("tr");
    // for(i = 1; i <tr.length; i++){
    //   td = tr[i].getElementsByTagName("td")
    //   console.log(td[i].innerHTML)
    // }
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        //Loop on Columns
        //console.log(td[j].nextSibling.innerHTML)
        for (j = 0; j < td.length - 1; j++) {
            //console.log (td[j]);
            if (td[j]) {
                // @ts-ignore: Unreachable code error
                txtValue = td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    //console.log("In condition");
                    //console.log(txtValue);
                    // @ts-ignore: Unreachable code error
                    tr[i].style.display = "";
                    var rec = document.getElementById("notFound");
                    rec.className = "d-none";
                    found = true;
                    break;
                }
                else {
                    // @ts-ignore: Unreachable code error
                    tr[i].style.display = "none";
                    // @ts-ignore: Unreachable code error
                    if (!found) {
                        var rec = document.getElementById("notFound");
                        rec.className = "d-block";
                    }
                }
            }
        }
    }
}
function sortname() {
    let sorted = dataBase.sort(sortNameasc);
    dataBase = sorted;
    console.log(dataBase);
    localStorage.clear();
    localStorage.setItem("pastRecords", JSON.stringify(dataBase));
    let table = document
        .getElementById("employeeList")
        .getElementsByTagName("tbody")[0];
    let i;
    //console.log(dataBase.length);
    loaduser();
}
function sortnamedesc() {
    let sorted = dataBase.sort(sortNamedesc);
    dataBase = sorted;
    console.log(dataBase);
    localStorage.clear();
    localStorage.setItem("pastRecords", JSON.stringify(dataBase));
    let table = document
        .getElementById("employeeList")
        .getElementsByTagName("tbody")[0];
    let i;
    //console.log(dataBase.length);
    loaduser();
}
function sortNameasc(a, b) {
    console.log("In sort by name function");
    const bandA = a.firstName.toUpperCase();
    const bandB = b.firstName.toUpperCase();
    let comparison = 0;
    if (bandA > bandB) {
        comparison = 1;
    }
    else if (bandA < bandB) {
        comparison = -1;
    }
    return comparison;
}
function sortNamedesc(a, b) {
    console.log("In sort by name function");
    const bandA = a.firstName.toUpperCase();
    const bandB = b.firstName.toUpperCase();
    let comparison = 0;
    if (bandA < bandB) {
        comparison = 1;
    }
    else if (bandA > bandB) {
        comparison = -1;
    }
    return comparison;
}
function sortLname() {
    let sorted = dataBase.sort(sortLnameasc);
    dataBase = sorted;
    console.log(dataBase);
    localStorage.clear();
    localStorage.setItem("pastRecords", JSON.stringify(dataBase));
    let table = document
        .getElementById("employeeList")
        .getElementsByTagName("tbody")[0];
    let i;
    //console.log(dataBase.length);
    loaduser();
}
function sortLnameasc(a, b) {
    console.log("In sort by name function");
    const bandA = a.lastName.toUpperCase();
    const bandB = b.lastName.toUpperCase();
    let comparison = 0;
    if (bandA > bandB) {
        comparison = 1;
    }
    else if (bandA < bandB) {
        comparison = -1;
    }
    return comparison;
}
function sortLnamedesc() {
    let sorted = dataBase.sort(sortLnameDesc);
    dataBase = sorted;
    console.log(dataBase);
    localStorage.clear();
    localStorage.setItem("pastRecords", JSON.stringify(dataBase));
    let table = document
        .getElementById("employeeList")
        .getElementsByTagName("tbody")[0];
    let i;
    //console.log(dataBase.length);
    loaduser();
}
function sortLnameDesc(a, b) {
    console.log("In sort by name function");
    const bandA = a.lastName.toUpperCase();
    const bandB = b.lastName.toUpperCase();
    let comparison = 0;
    if (bandA < bandB) {
        comparison = 1;
    }
    else if (bandA > bandB) {
        comparison = -1;
    }
    return comparison;
}
function sortemail() {
    let sorted = dataBase.sort(sortEmailAsc);
    dataBase = sorted;
    console.log(dataBase);
    localStorage.clear();
    localStorage.setItem("pastRecords", JSON.stringify(dataBase));
    let table = document
        .getElementById("employeeList")
        .getElementsByTagName("tbody")[0];
    let i;
    //console.log(dataBase.length);
    loaduser();
}
function sortEmailAsc(a, b) {
    console.log("In sort by name function");
    const bandA = a.email.toUpperCase();
    const bandB = b.email.toUpperCase();
    let comparison = 0;
    if (bandA > bandB) {
        comparison = 1;
    }
    else if (bandA < bandB) {
        comparison = -1;
    }
    return comparison;
}
function sortemaildesc() {
    let sorted = dataBase.sort(sortEmailDesc);
    dataBase = sorted;
    console.log(dataBase);
    localStorage.clear();
    localStorage.setItem("pastRecords", JSON.stringify(dataBase));
    let table = document
        .getElementById("employeeList")
        .getElementsByTagName("tbody")[0];
    let i;
    //console.log(dataBase.length);
    loaduser();
}
function sortEmailDesc(a, b) {
    console.log("In sort by name function");
    const bandA = a.email.toUpperCase();
    const bandB = b.email.toUpperCase();
    let comparison = 0;
    if (bandA < bandB) {
        comparison = 1;
    }
    else if (bandA > bandB) {
        comparison = -1;
    }
    return comparison;
}
function sortaddress() {
    let sorted = dataBase.sort(sortAddressAsc);
    dataBase = sorted;
    console.log(dataBase);
    localStorage.clear();
    localStorage.setItem("pastRecords", JSON.stringify(dataBase));
    let table = document
        .getElementById("employeeList")
        .getElementsByTagName("tbody")[0];
    let i;
    //console.log(dataBase.length);
    loaduser();
}
function sortAddressAsc(a, b) {
    console.log("In sort by name function");
    const bandA = a.address.toUpperCase();
    const bandB = b.address.toUpperCase();
    let comparison = 0;
    if (bandA > bandB) {
        comparison = 1;
    }
    else if (bandA < bandB) {
        comparison = -1;
    }
    return comparison;
}
function sortaddressdesc() {
    let sorted = dataBase.sort(sortAddressDesc);
    dataBase = sorted;
    console.log(dataBase);
    localStorage.clear();
    localStorage.setItem("pastRecords", JSON.stringify(dataBase));
    let table = document
        .getElementById("employeeList")
        .getElementsByTagName("tbody")[0];
    let i;
    //console.log(dataBase.length);
    loaduser();
}
function sortAddressDesc(a, b) {
    console.log("In sort by name function");
    const bandA = a.address.toUpperCase();
    const bandB = b.address.toUpperCase();
    let comparison = 0;
    if (bandA < bandB) {
        comparison = 1;
    }
    else if (bandA > bandB) {
        comparison = -1;
    }
    return comparison;
}
