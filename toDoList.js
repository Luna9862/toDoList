document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
  
    // Function to add a new to-do
    function addTodo() {
      const todoText = todoInput.value.trim();
      
      if (todoText !== '') {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = todoText;
        
        // Add click event listener to remove the todo item
        li.addEventListener('click', function() {
          this.remove();
        });
  
        // Append the new list item to the ul
        todoList.appendChild(li);
        
        // Clear the input
        todoInput.value = '';
      }
    }
  
    // Event listener for the add button
    addBtn.addEventListener('click', addTodo);
  
    // Event listener for pressing Enter key in input field
    todoInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        addTodo();
      }
    });
  });
  