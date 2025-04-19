// Autoplay
document.addEventListener("click", function () {
    let audio = document.getElementById("backgroundMusic");
    if (audio.muted) {
        audio.muted = false;
    }
}, { once: true });

// Jam Digital
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

// To-Do List
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let div = document.createElement("div");
    div.className = "task-item";
    div.innerHTML = `
        <input type="checkbox" class="task-checkbox" onclick="toggleComplete(this)">
        <span class="task-text" onclick="editTask(this)">${taskText}</span>
        <button class="btn btn-sm btn-outline-danger ms-2" onclick="removeTask(this)">Delete</button>`;

    document.getElementById("taskList").appendChild(div);
    taskInput.value = "";
}

function toggleComplete(checkbox) {
    let taskText = checkbox.nextElementSibling;
    taskText.classList.toggle("completed");
}

function removeTask(button) {
    let taskItem = button.parentElement;
    taskItem.remove();
}

function editTask(taskText) {
    taskText.contentEditable = true;
    taskText.focus();
    taskText.addEventListener("blur", () => {
        taskText.contentEditable = false;
    });
}
