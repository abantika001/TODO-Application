const lists = document.querySelector("#todo-list");

function addTodo(){
    const task = document.querySelectorAll(".box")[0];
    if(task.value.length == 0){
        alert("Need to add task!!!");
        return;
    }
    const todoItem = document.createElement("li");
    todoItem.classList.add("container-2");

    const para = document.createElement("p");
    para.classList.add("box");
    para.innerText = task.value;
    todoItem.append(para);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("button");
    doneBtn.innerText = "Done";
    todoItem.append(doneBtn);

    doneBtn.addEventListener("click", () => {
        para.style.textDecoration = "line-through"
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("button");
    deleteBtn.innerText = "Delete";
    todoItem.append(deleteBtn);

    deleteBtn.addEventListener("click", () => {
        todoItem.remove()
    });

    lists.append(todoItem);
}