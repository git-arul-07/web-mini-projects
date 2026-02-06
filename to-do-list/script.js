const taskList = document.getElementById("taskList");

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleTask(this)">${task}</span>
    <span class="delete" onclick="deleteTask(this)">✖</span>
  `;

  taskList.appendChild(li);
  saveTasks();
  input.value = "";
}

function deleteTask(el) {
  el.parentElement.remove();
  saveTasks();
}

function toggleTask(el) {
  el.parentElement.classList.toggle("completed");
  saveTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
  taskList.innerHTML = localStorage.getItem("tasks") || "";
}

loadTasks();
