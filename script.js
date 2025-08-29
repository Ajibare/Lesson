// Get Element
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

// initialize todos arrayn
let todos = [];

// add event listener to addButton
addTodoBtn.addEventListener('click', addTodo);

// fuction to add todo

function addTodo() {
    const todoText = todoInput.value.trim();
    if(todoText){
        const newTodo ={
            text: todoText,
            completed:true
        };
        todos.push(newTodo);
        renderTodos();
        todoInput.value = '';
    }
}

// function to render todos
function renderTodos(){
    todoList.innerHTML = '';
    todos.forEach((todo, index) =>{
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item')
        if(todo.completed){
            todoItem.classList.add('completed')
        }
        todoItem.innerHTML= `
        <span>${todo.text}</span>
        <button class='complete-btn'>Complete</button>
        <button class='delete-btn'>Delete</button>
        `;
        todoList.appendChild(todoItem);

        // add event listeners to buttons

        todoItem.querySelector('.complete-btn').addEventListener('click', () =>{
            todo.completed = !todo.completed;
            renderTodos()
        });
        todoItem.querySelector('.delete-btn').addEventListener('click', () =>{
            todos.splice(index, 1);
            renderTodos()
        });
    });
}