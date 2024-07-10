document.addEventListener('DOMContentLoaded', function() {
  const todoInput: HTMLInputElement = document.getElementById('todo-input') as HTMLInputElement;
  const addBtn: HTMLElement = document.getElementById('add-btn') as HTMLElement;
  const todoList: HTMLElement = document.getElementById('todo-list') as HTMLElement;

  function addTodo() {
      const todoText: string = todoInput.value.trim();
      
      if (todoText !== '') {
          const li: HTMLLIElement = document.createElement('li');
          li.textContent = todoText;
          
          li.addEventListener('click', function() {
              this.remove();
          });

          todoList.appendChild(li);

          todoInput.value = '';
      }
  }

  addBtn.addEventListener('click', addTodo);

  todoInput.addEventListener('keypress', function(e: KeyboardEvent) {
      if (e.key === 'Enter') {
          addTodo();
      }
  });
});
