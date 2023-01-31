const form = document.querySelector("form");
const taskContainer = document.getElementById("task-container");

form.addEventListener("submit", addTask);

function addTask(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const desc = document.getElementById("DESCRIBE").value;
  const date = document.getElementById("completedate").value;

  const task = `
  <div class="task-container">
    <h4>${title}</h4>
    <p>${desc}</p>
    <p>${date}</p>
    <div class="actions">
      <button class="complete-btn">CompLete</button>
      <button class="delete-btn">Delete</button>
      
    </div>
  </div>
`;


  taskContainer.insertAdjacentHTML("beforeend", task);

  form.reset();
}

taskContainer.addEventListener("click", function(event) {
  const target = event.target;
  const task = target.parentElement.parentElement;

  if (target.classList.contains("delete-btn")) {
    task.remove();
  } else if (target.classList.contains("complete-btn")) {
    parent.classList.toggle("completed");
  } else if (target.classList.contains("incomplete-btn")) {
    parent.classList.toggle("completed");
  }
});
task.classList.toggle("completed");
