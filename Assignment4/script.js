// task class
class Task {
  constructor(description, isComplete, id) {
    this.description = description;
    this.isComplete = isComplete;
    this.id = id;
  }
}
// Task manager class
class TaskManager {
  constructor() {
    this.tasks = [];
  }

  // adding task
  addTask(task) {
    this.tasks.push(task);
  }

  // delete task
  removeTask(index) {
    this.tasks.splice(index, 1);
  }

  // completed
  completeTask(id) {
    var task = this.tasks.find((t) => t.id === id);
    task.isComplete = true;
  }

  // updating task list
  updateTaskList(taskList) {
    taskList.innerHTML = '';

    if (this.tasks.length === 0) {
      taskList.innerHTML = '<li>No tasks found.</li>';
    } else {
      this.tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-start');

        const taskItem = document.createElement('div');
        taskItem.setAttribute('class', 'ms-2 me-auto');
        taskItem.textContent = task.description;

        const completeButton = document.createElement('button');

        if (task.isComplete) {
          completeButton.setAttribute('class', 'btn btn-danger');
          const icon = document.createElement('i');
          icon.setAttribute('class', 'bi bi-x');
          completeButton.appendChild(icon);
          completeButton.onclick = function () {
            removeTask(index);
          };
        } else {
          completeButton.setAttribute('class', 'btn btn-success');
          // BUTTON ICON
          const icon = document.createElement('i');
          icon.setAttribute('class', 'bi bi-check');
          completeButton.appendChild(icon);
          completeButton.onclick = function () {
            completeTask(task.id);
          };
        }

        listItem.appendChild(taskItem);
        listItem.appendChild(completeButton);
        taskList.appendChild(listItem);
      });
    }
  }
}

const taskManager = new TaskManager();

// adding task function
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const task = new Task(taskText, false, generateGuid());
    taskManager.addTask(task);
    updateUI();
    taskInput.value = '';
  } else {
    alert('Task cannot be empty.');
  }
}

// complete task function
function completeTask(id) {
  taskManager.completeTask(id);
  this.updateUI();
}
// updating tasks function
function updateUI() {
  const taskList = document.getElementById('taskList');
  taskManager.updateTaskList(taskList);
}

// delete task function
function removeTask(index) {
  taskManager.removeTask(index);
  updateUI();
}

// random id generator
function generateGuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
