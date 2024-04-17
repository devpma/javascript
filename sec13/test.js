const todoList = document.getElementById('todo-list')
const todoForm = document.getElementById('todo-form')
let todoArr = [];

function handleTodoItemClick(clickedId) {
    todoArr = todoArr.map(function(aTodo) {
        if(aTodo.todoId === clickedId) {
            return {
                ...aTodo, todoDone: !aTodo.todoDone
            }
        } else {
            return aTodo
        }
    })
    displayTodos();
}

// 할일 보여주기
function displayTodos() {
    todoArr.forEach(function(aTodo) {
        todoList.innerHTML = "";
        const todoItem = document.createElement('li')
        const todoDelBtn = document.createElement('span')
        todoDelBtn.textContent = 'x'
        todoItem.textContent = aTodo.todoText
        if(aTodo.todoDone) {
            todoItem.classList.add('done');
        } else {
            todoItem.classList.add('yet');
        }
        todoItem.appendChild(todoDelBtn)
        todoList.appendChild(todoItem)
        todo.addEventListener('click' , function() {
            handleTodoItemClick(aTodo.todoId)
        })
    })
}

// 할일 추가하기
todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const toBeAdded = {
        todoText: todoForm.todo.value,
        todoId: new Date().getTime(),
        todoDone : false
    }
    todoForm.todo.value = ""
    todoArr.push(toBeAdded);
    displayTodos()
})

// , 할일 수정하기, 할일 삭제하기
