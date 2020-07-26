var list = document.getElementById("list");


function addTodo(){
    // li tag
    var todo_item = document.getElementById("todo-item");
    var li = document.createElement("li");
    var litext = document.createTextNode(todo_item.value);
    
    


    // Deletebutton
    var delbtn = document.createElement("button");
    var deltext = document.createTextNode("Delete");
    delbtn.setAttribute("class","btn")
    delbtn.setAttribute("onclick","deleteItem(this)")
    delbtn.appendChild(deltext);
    

    // updatebutton
    var updatebtn = document.createElement("button");
    var updatetext = document.createTextNode("Update");
    updatebtn.setAttribute("class","btn")
    updatebtn.setAttribute("onclick","updateItem(this)")
    updatebtn.appendChild(updatetext);


    li.appendChild(litext);
    list.appendChild(li);

    li.appendChild(delbtn);    
    todo_item.value = ""

    li.appendChild(updatebtn);    
   

   
}


// delete one

function deleteItem(e){
    e.parentNode.remove()
}

// delete all

function deleteAll(){
    list.innerHTML = ""
}


// update

function updateItem(e){
    var update = prompt("Enter edit value",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = update;
}