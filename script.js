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
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("memberList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.kName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.birth;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = `<a onClick="onEdit(this)">수정</a>
                       <a onClick="onDelete(this)">삭제</a>`;
}

function resetForm() {
    document.getElementById("kName").value ="";
    document.getElementById("birth").value ="";
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("kName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("birth").value = selectedRow.cells[1].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.kName;
    selectedRow.cells[1].innerHTML = formData.birth;
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