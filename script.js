document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');

        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="edit-btn" onclick="editTask(this)">Edit</button>
                <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
            </div>
        `;
        
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function editTask(button) {
    const li = button.parentElement.parentElement;
    const span = li.querySelector('span');
    const newTask = prompt('Edit your task:', span.innerText);

    if (newTask !== null && newTask.trim() !== '') {
        span.innerText = newTask;
    }
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}

document.getElementById('taskList').addEventListener('click', function(e) {
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.classList.toggle('completed');
        
        // Optionally, update the button text or add a tooltip
        const completed = e.target.parentElement.classList.contains('completed');
        e.target.innerText = completed ? '✔️ ' + e.target.innerText : e.target.innerText.replace('✔️ ', '');
    }
});