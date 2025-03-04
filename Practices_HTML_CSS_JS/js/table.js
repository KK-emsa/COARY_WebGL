// 新增数据按钮
function addRow() {
    let table = document.getElementById('table');
    // console.log(table);
    let length = table.rows.length;
    // console.log(length);
    let newRow = table.insertRow(length);
    // console.log(newRow);

    // 新增行
    let nameCol = newRow.insertCell(0);
    let phoneCol = newRow.insertCell(1);
    let actionCol = newRow.insertCell(2);
    // console.log(newRow);

    // 新增内容
    nameCol.innerHTML = '未命名';
    phoneCol.innerHTML = '无';
    actionCol.innerHTML = '<button onclick="editRow(this)">编辑</button> <button onclick="deleteRow(this)">删除</button>';
}

function deleteRow(button) {
    // console.log(button);
    let row = button.parentNode.parentNode;
    // console.log(row);
    row.parentNode.removeChild(row);
}

function editRow(button) {
    let row = button.parentNode.parentNode;
    let name = row.cells[0];
    let phone = row.cells[1];

    let inputName = prompt("请输入名字：");
    let inputPhone = prompt("请输入联系方式：");

    if(inputName != null)
        name.innerHTML = inputName;
    if(inputPhone != null)
        phone.innerHTML = inputPhone;
}