// Get elements from HTML
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add new task
function addTask() {
    const taskText = taskInput.value;
    
    if (taskText !== '') {
        // Create new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        
        // Add to task list
        taskList.appendChild(listItem);
        
        // Clear input
        taskInput.value = '';
    }
}

// Event listener for add button
addButton.addEventListener('click', addTask);
// Add this inside the addTask function after creating listItem
listItem.addEventListener('click', function() {
    this.classList.toggle('completed');
});

// Add delete functionality
const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.addEventListener('click', function() {
    listItem.remove();
});
listItem.appendChild(deleteButton);
// Save tasks to localStorage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#task-list li').forEach(task => {
        tasks.push(task.textContent.replace('Delete', '').trim());
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks when page loads
function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => {
        // Recreate each task
    });
}
