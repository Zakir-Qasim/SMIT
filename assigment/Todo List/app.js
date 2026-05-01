var Todos = [];

var todosInp = document.getElementById("todoInput");
var addBtn = document.getElementById("addBtn");
var updateBtn = document.getElementById("updateBtn");
var child2 = document.getElementById("child2");

var editIndex = null;

// Save Todos
function saveTodos() {
    var data = JSON.stringify(Todos);
    localStorage.setItem("Todos", data);
}

// Load Todos
function loadTodos() {
    var data = localStorage.getItem("Todos");

    if (data != null) {
        Todos = JSON.parse(data);
    }

    renderTodos();
}

function renderTodos(){
    child2.innerHTML="";
    for (let i = 0; i < Todos.length; i++) {
        var todos = Todos[i];
        
        var div = document.createElement("div");
        div.className = "box";
        div.innerHTML = todos.text;
        
        child2.appendChild(div);
    
        // Delete Todos
    let deletebtn = document.createElement("button");
    deletebtn.innerText="Delete";
    deletebtn.className="delete";

    deletebtn.onclick = function(){
        Todos.splice(i,1);
        saveTodos();
        renderTodos();
    }
    div.appendChild(deletebtn);
    
 
    // Edit Todos
    let editbtn = document.createElement("button");
    editbtn.innerText = "Edit";
    editbtn.className = "edit"
    
    editbtn.onclick = function(){
        todosInp.value = Todos[i].text;
        editIndex = i;
        addBtn.style.display = "none";
        updateBtn.style.display = "inline";
        donebtn.style.display = "none"
    }
    div.appendChild(editbtn);
    

    // Done Todos
    let donebtn = document.createElement("button");
    donebtn.innerText="Done";
    donebtn.className="done";

    if(todos.isCompleted == true){
        donebtn.style.display="none";
        editbtn.style.display="none";
        updateBtn.style.display="none";
    }
    else{
        donebtn.innerText = "Done"
    }
    donebtn.onclick = function(){
        Todos[i].isCompleted = true;
        saveTodos();
        renderTodos();
    }
    div.appendChild(donebtn);
}
}

// Add Todos
addBtn.onclick = function (){
    if(todosInp.value == ""){
        alert("Enter Todos");
        return;
    }
    var obj = {
        text : todosInp.value,
        isCompleted : false
    };
    Todos.push(obj);
    
    todosInp.value = "";
    renderTodos();
    // saveTodos();
}

// update Todos
updateBtn.onclick = function(){
    if(todosInp.value == ""){
        alert("Enter Todos")
        return;
    }
    Todos[editIndex].text = todosInp.value;
    
    todosInp.value = "";
    editIndex = null;

    updateBtn.style.display = "none";
    addBtn.style.display = "inline";
    
    saveTodos();
    renderTodos();
    
}
loadTodos ();
