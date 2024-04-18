function tableFill(datas,table){

    tbody = table.querySelector("tbody");
    thead = table.querySelector("thead");

    thead.replaceChildren();
    var tr = document.createElement("tr");
    for(let i = 0; i<Object.keys(datas[0]).length; i++){
        th = document.createElement("th");
        th.innerText = Object.keys(datas[0])[i]
        tr.appendChild(th)
    }
    thead.appendChild(tr)

    datas.forEach(data => {
        var tr = document.createElement("tr");
        /*Object.keys(data).forEach(function(key) {
            var td = document.createElement("td");
            td.innerText = data[key];
            tr.appendChild(td);
        });*/
        for(let i = 0; i<Object.keys(datas[0]).length; i++){
            var td = document.createElement("td");
            td.innerText = data[Object.keys(datas[0])[i]];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    });
}

function insertFill(table,datas){
    tbody = table.querySelector("tbody");
    thead = table.querySelector("thead");
    ths = thead.getElementsByTagName("th");

    datas.forEach(data => {
        var tr = document.createElement("tr");
        for (var i = 0; i < ths.length; i++) {  
            var td = document.createElement("td");
            td.innerText = data[ths[i].innerText];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    });
}

function removeFill(table,rowid){
    if(rowid==undefined){
        table.replaceChildren();
    } else {
        var tableRow = table.getElementsByTagName('tr');
        for (var t = 0; t < tableRow.length; t++){
            if(t == rowid-1){
                tableRow[t].parentNode.deleteRow(rowid-1)
            }
        }
    }
}