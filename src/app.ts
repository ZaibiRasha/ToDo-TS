// Define an interface for our to-do item
interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}

// Create an array to hold our to-do items
let todoList: TodoItem[] = [];

// Function to add a new to-do item to the list
export function addTodoItem(task: string) {
  const newTodoItem: TodoItem = {
    id: todoList.length + 1,
    task,
    completed: false,
  };
  todoList.push(newTodoItem);
  displayTodoList();
}

// Function to mark a to-do item as completed
export function completeTodoItem(id: number) {
  const todoItem = todoList.find((item) => item.id === id);
  if (todoItem) {
    todoItem.completed = true;
    displayTodoList();
  }
}

// Function to delete a completed to-do item
export function deleteCompletedTodoItems() {
  todoList = todoList.filter((item) => !item.completed);
  displayTodoList();
}

// Function to display the to-do list
function displayTodoList() {
  const taskList = document.getElementById('taskList')!;
  taskList.innerHTML = '';

  todoList.forEach((item) => {
    const li = document.createElement('li');
    
    const span = document.createElement('span');
    span.innerText = item.task;
    li.appendChild(span);

    const completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.id = `completeButton-${item.id}`;
    completeButton.className = `complete`;
    completeButton.addEventListener('click', () => completeTodoItem(item.id));
    li.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.id = `deleteButton-${item.id}`;
    deleteButton.className = `delete`;
    deleteButton.addEventListener('click', () => deleteTodoItem(item.id));
    li.appendChild(deleteButton);

    if (item.completed) {
      li.classList.add('complete');
    }

    taskList.appendChild(li);
  });
}



// Event listener to handle form submission
const form = document.getElementById('addTaskBtn')!;
form.addEventListener('click', (event) => {
  event.preventDefault();
  const taskInput = document.getElementById('taskInput') as HTMLInputElement;
  const task = taskInput.value.trim();
  if (task) {
    addTodoItem(task);
    taskInput.value = '';
    taskInput.focus();
  }
});
function deleteTodoItem(id: number) {
  const todoIndex = todoList.findIndex((item) => item.id === id);
  if (todoIndex >= 0) {
    todoList.splice(todoIndex, 1);
    displayTodoList();
  }
}

// Initial display of the to-do list
displayTodoList();
