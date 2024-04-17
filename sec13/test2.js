const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');

let todoArr = [];

// 할일 삭제하기
function handleTodoDelBtnClick(clickedId){
    todoArr = todoArr.filter(function(aTodo){
    return aTodo.todoId !== clickedId
    })
    displayTodos()
}


// 할일을 클릭했을 때 그 아이디를 받아서 그 아이디에 일치하는 항목만 스타일 변경
function handleTodoItemClick(clickedId) {
    todoArr = todoArr.map(function(aTodo) {
        if(aTodo.todoId === clickedId) {
            return {
                ...aTodo, todoDone: !aTodo.todoDone // TodoDone상태를 뒤집어서 덮음
            }
        } else {
            return aTodo
        }
    })
    displayTodos();
}


// 할일 보여주기 
function displayTodos() {
    todoList.innerHTML = "" // 원래 있었던 텍스트 지우기

    // li에 할일 보여주기
    todoArr.forEach(function(aTodo) {
        const todoItem = document.createElement('li')
        const todoDelBtn = document.createElement('span')
        todoDelBtn.textContent = 'x';
        todoItem.textContent = aTodo.todoText

        // 상태에 따른 클래스 추가
        if (aTodo.todoDone) {
            todoItem.classList.add('done')
        } else {
            todoItem.classList.add('yet')
        }

        // 클릭시 상태가 바뀌는 이벤트 추가
        todoItem.addEventListener('click', function() {
            handleTodoItemClick(aTodo.todoId);
        })
        // 클릭시 상태가 바뀌는 이벤트 추가
        todoItem.addEventListener('click', function() {
            handleTodoDelBtnClick(aTodo.todoId)
        })

        
        // append
        todoItem.appendChild(todoDelBtn);
        todoList.appendChild(todoItem);
    })
};

// 할일 추가하기
todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // 할일 표현
    const toBeAdded = {
        todoText:todoForm.todo.value,
        todoId:new Date().getTime(),
        todoDone:false
    }
    todoForm.todo.value = "" // 추가 후 인풋 지우기
    todoArr.push(toBeAdded) // 배열에 추가
    displayTodos() // 할일이 추가될 때 마다 실행할 함수
})
