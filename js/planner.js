// Academic Planner State Management
let tasks = [
    { id: 1, title: "Review COS 106 HTML & CSS guidelines", completed: true },
    { id: 2, title: "Complete JS form validation for portfolio", completed: false }
];

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskError = document.getElementById("taskError");
const taskList = document.getElementById("taskList");

// Function to render tasks to the DOM
function renderTasks() {
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        taskList.innerHTML = "<p style='color: #64748b;'>No tasks added yet. Start planning above!</p>";
        return;
    }

    tasks.forEach((task) => {
        const item = document.createElement("div");
        item.className = `task-item ${task.completed ? "completed" : ""}`;

        item.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleTask(${task.id})">
        <span>${task.title}</span>
      </div>
      <button class="btn btn-danger" onclick="deleteTask(${task.id})">Delete</button>
    `;

        taskList.appendChild(item);
    });
}

// Add task event listener
taskForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const text = taskInput.value.trim();

    if (text === "") {
        taskError.textContent = "Please enter a valid task description.";
        return;
    }

    taskError.textContent = "";

    const newTask = {
        id: Date.now(),
        title: text,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = "";
    renderTasks();
});

// Toggle completion status
window.toggleTask = function (id) {
    tasks = tasks.map((task) => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    renderTasks();
};

// Delete task
window.deleteTask = function (id) {
    tasks = tasks.filter((task) => task.id !== id);
    renderTasks();
};

// Initial render
renderTasks();