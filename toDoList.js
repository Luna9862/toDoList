
document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
 
    function addTodo() {
      const todoText = todoInput.value.trim();
     
      if (todoText !== '') {
      
        const li = document.createElement('li');
        li.textContent = todoText;
       
        li.addEventListener('click', function() {
          this.remove();
        });
 
        todoList.appendChild(li);
       
        todoInput.value = '';
      }
    }
 
    addBtn.addEventListener('click', addTodo);
 
    todoInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        addTodo();
      }
    });
  });
