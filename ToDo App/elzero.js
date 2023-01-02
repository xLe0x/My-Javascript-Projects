// Calling The html elements
const input = document.querySelector(".input-task");
const addButton = document.querySelector(".add-task");
const divTasks = document.querySelector(".tasks");

let arrayOfTasks = [];

if (localStorage.getItem("tasks")) {
  divTasks.style.opacity = "1";
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

getTasksFromLocalStorage();

if (divTasks.innerHTML === "") divTasks.style.opacity = "0";

addButton.onclick = function () {
  if (input.value.length > 0) {
    addTaskToArray(input.value);
    input.value = "";
    divTasks.style.opacity = "1";
  }
};

function addTaskToArray(taskText) {
  // Creating The Task
  const task = {
    id: Date.now(),
    title: taskText,
  };
  // Pushing The Task To The Array
  arrayOfTasks.push(task);

  // Adding The Tasks To The Page
  addTaskToPage(arrayOfTasks);

  // Adding The Tasks To The Local Storage
  addTasksToLocalStorage(arrayOfTasks);
}

function addTaskToPage(arrayOfTasks) {
  divTasks.innerHTML = "";
  arrayOfTasks.forEach((task) => {
    // Creating The Task Element
    let span = document.createElement("span");
    span.className = "task";
    span.textContent = task.title;
    span.setAttribute("task-id", task.id);
    // Creating The Delete Button
    let delButton = document.createElement("button");
    delButton.className = "delete";
    delButton.textContent = "Delete";

    span.addEventListener("click", function (e) {
      if (e.target.classList.contains("delete")) {
        deleteTaskWith(e.target.parentElement.getAttribute("task-id"));
        e.target.parentElement.remove();
      }
    });

    // Adding The delete button to the task element
    span.appendChild(delButton);

    // Adding the task element to the tasks container
    divTasks.appendChild(span);
  });
}

function deleteTaskWith(taskId) {
  arrayOfTasks = arrayOfTasks.filter((task) => taskId != task.id);
  addTasksToLocalStorage(arrayOfTasks);
}

function addTasksToLocalStorage(arrayOfTasks) {
  localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function getTasksFromLocalStorage() {
  let data = localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addTaskToPage(tasks);
  }
}
