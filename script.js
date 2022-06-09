var selectedRow = null

function onFormSubmit() {
    if(validate()) {
        var formData = readFormData();
        if(selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["kName"] = document.getElementById("kName").value;
    formData["birth"] = document.getElementById("birth").value;
    formData["tel"] = document.getElementById("tel").value;
    formData["address"] = document.getElementById("address").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("memberList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.kName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.birth;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.tel;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.address;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">수정</a>
                       <a onClick="onDelete(this)">삭제</a>`;
}

function resetForm() {
    document.getElementById("kName").value ="";
    document.getElementById("birth").value ="";
    document.getElementById("tel").value ="";
    document.getElementById("address").value ="";
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("kName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("birth").value = selectedRow.cells[1].innerHTML;
    document.getElementById("tel").value = selectedRow.cells[2].innerHTML;
    document.getElementById("address").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.kName;
    selectedRow.cells[1].innerHTML = formData.birth;
    selectedRow.cells[2].innerHTML = formData.tel;
    selectedRow.cells[3].innerHTML = formData.address;
}

function onDelete(td) {
    row = td.parentElement.parentElement;
    document.getElementById("memberList").deleteRow(row.rowIndex);
    resetForm();
}

function validate() {
    isValid = true;
    if (document.getElementById("kName").value == "") {
        isValid = false;
        document.getElementById("kNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("kNameValidationError").classList.contains("hide"))
            document.getElementById("kNamevalidationError").classList.add("hide");
    }
    return isValid;
}

function filter(){ // 검색필터를 만들었는데 필터링이 안되서 가능하시면 수정부탁드릴게요 ㅠㅠ

    var value, name, list, i;

    value = document.getElementById("value").value.toUpperCase();
    list = document.getElementsByClassName("list");

    for(i=0;i<item.length;i++){
      name = item[i].getElementsByClassName("name");
      if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
        list[i].style.display = "flex";
      }else{
        list[i].style.display = "none";
      }
    }
  }