const emailInput = document.getElementById("email") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const form = document.getElementById("login") as HTMLButtonElement;
const errorContainer = document.getElementById("error-container") as HTMLDivElement;
const errorMessage = document.getElementById("error-message") as HTMLParagraphElement;

let tasks: any;

if (form) {
  form.addEventListener("click", async (event) => {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    try {
      const response = await fetch("http://localhost:8010/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        response
          .json()
          .then((data) => {
            const token = data.token;
            localStorage.setItem("token", token); // set token value in local storage
            console.log(token); // logs the token value to the console
          })
          .catch((error) => {
            console.error("There was a problem parsing the JSON data:", error);
          });
        window.location.href = "tasks.html";
        console.log("Logged in successfully");
      } else {
        console.log(`Response status code: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
      if (errorMessage && errorContainer) {
        errorMessage.innerText = error ? error.toString() : "";
        errorContainer.classList.remove("hidden");
      }
    }
  });
}
// Function to display the to-do list
async function displayTodoList() {
  try {
    const token = localStorage.getItem("token"); // get token value in local storage
    const myHeaders = new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    });
    const response = await fetch("http://localhost:8010/tasks", {
      method: "GET",
      credentials: "include",
      headers: myHeaders,
    });
    tasks = await response.json();

    const taskList = document.getElementById("taskList")!;
    taskList.innerHTML = "";

    tasks.forEach((item: any) => {
      const li = document.createElement("li");

      const id = document.createElement("p");
      id.style.visibility = "hidden";
      id.innerText = item.id;
      li.appendChild(id);
      const span = document.createElement("span");
      span.innerText = item.title;
      li.appendChild(span);

      const completeButton = document.createElement("button");
      completeButton.innerText = "Complete";
      completeButton.id = `completeButton-${item.id}`;
      completeButton.className = `complete`;
      if (!item.completed){
        completeButton.addEventListener("click", () => completeTodoItem(item.id));
      }
      li.appendChild(completeButton);

      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.id = `deleteButton-${item.id}`;
      deleteButton.className = `delete`;
      deleteButton.addEventListener("click", () => deleteTodoItem(item.id));
      li.appendChild(deleteButton);

      if (item.completed) {
        li.classList.add("complete");
      }

      taskList.appendChild(li);
    });
  } catch (error) {
    console.log(error);
  }
}

// Event listener to handle form submission
const addTaskBtn = document.getElementById("addTaskBtn")!;
addTaskBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const taskInput = document.getElementById("taskInput") as HTMLInputElement;
  const task = taskInput.value.trim();
  if (task) {
    addTodoItem(task, task);
    taskInput.value = "";
    taskInput.focus();
  }
});

// Function to add a new to-do item to the list
async function addTodoItem(title: string, description: string) {
  const token = localStorage.getItem("token"); // get token value in local storage
  const response = await fetch("http://localhost:8010/tasks", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      title: title,
      description: description,
      completed: false,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
  displayTodoList();
}

// Function to mark a to-do item as completed
async function completeTodoItem(id: number) {
  const token = localStorage.getItem("token"); // get token value in local storage
  await fetch(`http://localhost:8010/tasks/${id}/complete`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
  displayTodoList();
}

// Function to delete a to-do item
async function deleteTodoItem(id: number) {
  const token = localStorage.getItem("token"); // get token value in local storage
  await fetch(`http://localhost:8010/tasks/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).catch((error) => console.error(error));
  displayTodoList();
}

// Initial display of the to-do list
displayTodoList();
