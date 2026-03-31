let filter = 'all';

const getTasks = () => JSON.parse(localStorage.getItem('tasks')) || [];
const saveTasks = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks));

const addTask = () => {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (!text) return;

  const tasks = getTasks();
  tasks.push({ text, completed: false });
  saveTasks(tasks);

  input.value = '';
  displayTasks();
};

const toggleTask = (index) => {
  const tasks = getTasks();
  tasks[index].completed = !tasks[index].completed;
  saveTasks(tasks);
  displayTasks();
};

const deleteTask = (index) => {
  const tasks = getTasks();
  tasks.splice(index, 1);
  saveTasks(tasks);
  displayTasks();
};

const editTask = (index) => {
  const tasks = getTasks();
  const newTask = prompt('Edit your task:', tasks[index].text);
  if (newTask !== null) {
    tasks[index].text = newTask.trim();
    saveTasks(tasks);
    displayTasks();
  }
};

const filterTasks = (type) => {
  filter = type;
  displayTasks();
};

const displayTasks = () => {
  const container = document.getElementById('taskList');
  container.innerHTML = '';

  let tasks = getTasks();

  if (filter === 'completed') {
    tasks = tasks.filter(t => t.completed);
  } else if (filter === 'pending') {
    tasks = tasks.filter(t => !t.completed);
  }

  tasks.forEach((task, index) => {
    const div = document.createElement('div');
    div.className = 'flex justify-between items-center bg-white p-4 rounded shadow';

    div.innerHTML = `
      <div class="flex items-center gap-3">
        <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${index})">
        <p class="${task.completed ? 'line-through text-gray-400' : ''} font-bold">
          ${task.text.toUpperCase()}
        </p>
      </div>
      <div class="flex gap-2">
        <button onclick="editTask(${index})" class="bg-black text-white px-5 rounded-lg hover:bg-slate-900 cursor-pointer hover:scale-110">Edit</button>
        <button onclick="deleteTask(${index})" class="bg-black text-white px-5 py-2 rounded-lg hover:bg-slate-900 cursor-pointer hover:scale-110">Delete</button>
      </div>
    `;

    container.appendChild(div);
  });
};

window.onload = displayTasks;
