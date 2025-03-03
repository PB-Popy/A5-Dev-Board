let taskAssigned = 6;
let completedTasks = 23;

function completeTask(taskId, taskName) {
    // Show the popup
    alert('The board is successfully updated');

    // Disable the button
    document.getElementById(taskId).querySelector('button').disabled = true;

    // Decrement assigned tasks and increment completed tasks
    taskAssigned--;
    completedTasks++;

    // Update the task counts on the page
    document.getElementById("task-assigned").textContent = taskAssigned;
    document.getElementById("completed-tasks").textContent = completedTasks;

    // Add activity log entry
    let activityLog = document.getElementById("activity-log");
    let currentTime = new Date().toLocaleDateString();
    let logEntry = document.createElement("div");
    logEntry.className = "activity-log-entry";
    logEntry.textContent = `You have successfully completed the task ${taskName} at ${currentTime}`;
    activityLog.appendChild(logEntry);

    // Check if all tasks are completed
    if (taskAssigned === 0) {
        alert("You have completed all the tasks");
    }
}

function changeColor() {
    // Change background color of the page
    document.body.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function clearHistory() {
    // Clear all activity log entries
    document.getElementById("activity-log").innerHTML = '';
}

// Set the current date
document.getElementById("current-date").textContent = new Date().toDateString();