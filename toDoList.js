document.addEventListener('DOMContentLoaded', function () {
    var todoInput = document.getElementById('todo-input');
    var addBtn = document.getElementById('add-btn');
    var todoList = document.getElementById('todo-list');
    function addTodo() {
        var todoText = todoInput.value.trim();
        if (todoText !== '') {
            var li = document.createElement('li');
            li.textContent = todoText;
            li.addEventListener('click', function () {
                this.remove();
            });
            todoList.appendChild(li);
            todoInput.value = '';
        }
    }
    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
});
