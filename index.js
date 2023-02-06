const form = document.querySelector("form");
const taskContainer = document.getElementById("task-container");
const completedCountDisplay = document.querySelector("#completed-count");
const uncompletedCountDisplay = document.querySelector("#uncompleted-count");

let completedCount = 0;
let uncompletedCount = 0;

form.addEventListener("submit", addTask);

function addTask(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;
  const date = document.getElementById("date").value;

  const task = `
    <div class="task">
      <h4>${title}</h4>
      <p>${desc}</p>
      <p>${date}</p>
      <div class="actions">
        <button class="complete-btn">Complete</button>
        <button class="delete-btn">Delete</button>
      </div>
    </div>
  `;
  taskContainer.insertAdjacentHTML("beforeend", task);
  form.reset();
}

taskContainer.addEventListener("click", function(event) {
  const target = event.target;
  const task = target.closest(".task");

  if (target.classList.contains("delete-btn")) {
    task.remove();
  } else if (target.classList.contains("complete-btn")) {
    task.classList.toggle("completed");
    if (task.classList.contains("completed")) {
      completedCount++;
      uncompletedCount--;
    } else {
      completedCount--;
      uncompletedCount++;
    }
    completedCountDisplay.textContent = completedCount;
    uncompletedCountDisplay.textContent = uncompletedCount;
  }
});
