

document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");
  
    taskForm.addEventListener("submit", (event) => {
      event.preventDefault(); 
      
      // Get input values
      const taskDescription = document.getElementById("new-task-description").value;
      const priority = document.getElementById("priority").value;
      const user = document.getElementById("user").value;
      const dueDate = document.getElementById("due-date").value;
      
      if (!taskDescription.trim()) return; // Prevent empty tasks
      
      // Create task item
      const taskItem = document.createElement("li");
      taskItem.textContent = `${taskDescription} (Priority: ${priority}, Assigned to: ${user}, Due: ${dueDate})`;
      
      taskList.appendChild(taskItem);
      
      // Clear fields after submission
      taskForm.reset();
    });
  });
  