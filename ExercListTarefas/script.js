const addTaskForm = document.getElementById("add-task-form");
const taskTitleInput = document.getElementById("task-title");
const taskDescriptionTextarea = document.getElementById("task-description");
const taskList = document.getElementById("task-list");
const pendingTasksCount = document.getElementById("pending-tasks-count");

addTaskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskTitle = taskTitleInput.value;
  const taskDescription = taskDescriptionTextarea.value;

  addTask(taskTitle, taskDescription);

  taskTitleInput.value = "";
  taskDescriptionTextarea.value = "";
});

let tasks = [];

function addTask(title, description) {
  const task = {
    id: tasks.length + 1,
    title: title,
    description: description,
    completed: false,
  };

  tasks.push(task);

  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
    <input type="checkbox" id="task-${task.id}" ${
    task.completed ? "checked" : ""
  }>
    <label for="task-${task.id}">${task.title}</label>
    <p>${task.description}</p>
  `;
  taskList.appendChild(taskItem);

  taskItem
    .querySelector('input[type="checkbox"]')
    .addEventListener("change", function () {
      task.completed = this.checked;
      updateTaskCount();
    });

  updateTaskCount();
}

function updateTaskCount() {
  const pendingTasks = tasks.filter((task) => !task.completed);
  pendingTasksCount.innerText = pendingTasks.length;
}
