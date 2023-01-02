const input = document.querySelector(".input-task");
const addButton = document.querySelector(".add-task");
const tasksContainer = document.querySelector(".tasks");

let arrayOfTasks = [];

if (localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.stringify(localStorage.getItem("tasks"));
}

getTaskFromLocalStorage();

addButton.onclick = function () {
  if (input.value != "") {
    addTaskToArray(input.value);
    input.value = "";
  }
};

function addTaskToArray(taskText) {
  const task = {
    id: Date.now(),
    title: taskText,
  };

  arrayOfTasks.push(task);

  addTaskToPage(arrayOfTasks);
}

function addTaskToPage(arrayOfTasks) {
  tasksContainer.innerHTML = "";
  arrayOfTasks.forEach((task) => {
    let span = document.createElement("span");
    span.className = "task";
    span.textContent = task.title;
    span.setAttribute("task-id", task.id);

    let delButton = document.createElement("button");
    delButton.className = "delete";
    delButton.textContent = "delete";

    tasksContainer.addEventListener("click", function (e) {
      if (e.target.classList.contains("delete")) {
        deleteElementWith(e.target.parentElement.getAttribute("task-id"));
        console.log(e.target.parentElement.getAttribute("task-id"));
        e.target.parentElement.remove();
      }
    });

    span.appendChild(delButton);
    tasksContainer.appendChild(span);
  });
  addTaskToLocalStorage();
}

function addTaskToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function getTaskFromLocalStorage() {
  let data = localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addTaskToPage(tasks);
  }
}

function deleteElementWith(taskId) {
  arrayOfTasks = arrayOfTasks.filter((task) => taskId != task.id);
  //   Updating The Local Storage after filtering it!
  addTaskToLocalStorage();
}
