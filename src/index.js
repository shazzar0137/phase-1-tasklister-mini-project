document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const todoInput = document.querySelector("#new-task-description");
  const taskList = document.querySelector("#tasks");

  const prioritySelect = document.querySelector("#priority");
  const userInput = document.querySelector("#user");
  const dueDateInput = document.querySelector("#due-date");

  form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent form from reloading the page

      // Get input values
      const taskText = todoInput.value.trim();
      const priority = prioritySelect.value;
      const user = userInput.value.trim();
      const dueDate = dueDateInput.value;

      if (taskText && user && dueDate) {
          // Create a new list item
          const li = document.createElement("li");
          li.textContent = `${taskText} (Assigned to: ${user}, Due: ${dueDate})`;

          // Set color based on priority
          if (priority === "high") li.style.color = "red";
          if (priority === "medium") li.style.color = "orange";
          if (priority === "low") li.style.color = "green";

          // Add delete button
          const deleteBtn = document.createElement("button");
          deleteBtn.textContent = "Delete";
          deleteBtn.style.marginLeft = "10px";
          deleteBtn.addEventListener("click", () => {
              li.remove();
          });
          li.appendChild(deleteBtn);

          // Add edit button
          const editBtn = document.createElement("button");
          editBtn.textContent = "Edit";
          editBtn.style.marginLeft = "10px";
          editBtn.addEventListener("click", () => {
              const newTaskText = prompt("Edit your task:", taskText);
              if (newTaskText) li.firstChild.textContent = `${newTaskText} (Assigned to: ${user}, Due: ${dueDate})`;
          });
          li.appendChild(editBtn);

          // Insert tasks based on priority
          const existingTasks = Array.from(taskList.children);
          let inserted = false;

          for (let i = 0; i < existingTasks.length; i++) {
              if (
                  (priority === "high" && existingTasks[i].style.color !== "red") ||
                  (priority === "medium" && existingTasks[i].style.color === "green")
              ) {
                  taskList.insertBefore(li, existingTasks[i]);
                  inserted = true;
                  break;
              }
          }

          if (!inserted) taskList.appendChild(li);

          // Clear the input fields
          todoInput.value = "";
          userInput.value = "";
          dueDateInput.value = "";
      }
  });
});