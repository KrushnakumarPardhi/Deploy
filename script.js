function addTask() {
  const input = document.getElementById("todoInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const ul = document.getElementById("todoList");

  // Create new <li> item
  const li = document.createElement("li");
  
  // Toggle complete state on click
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Task text span
  const textNode = document.createTextNode(taskText);
  li.appendChild(textNode);

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete-btn";
  
  // Handle delete action
  deleteBtn.onclick = function (e) {
    e.stopPropagation(); // Prevents line-through toggle on delete
    ul.removeChild(li);
  };

  li.appendChild(deleteBtn);
  ul.appendChild(li);

  // Clear input box
  input.value = "";
}