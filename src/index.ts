
const emailInput = document.getElementById('email') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;
const form = document.getElementById('login') as HTMLButtonElement;
const errorContainer = document.getElementById('error-container') as HTMLDivElement;
const errorMessage = document.getElementById('error-message') as HTMLParagraphElement;
if(form){
form.addEventListener('click', async (event) => {
    event.preventDefault();
  
    const email = emailInput.value;
    const password = passwordInput.value;

    
    try {
      const response = await fetch('http://localhost:8010/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.status === 200) {
          response.json().then(data => {
            const token = data.token;
            localStorage.setItem('token', token); // set token value in local storage
            console.log(token); // logs the token value to the console
          }).catch(error => {
            console.error('There was a problem parsing the JSON data:', error);
          });
        window.location.href = "tasks.html";
        console.log('Logged in successfully');
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
  
  document.addEventListener("DOMContentLoaded", async () => {
    try {
      const token =localStorage.getItem('token'); // get token value in local storage
      console.log({token:token});
      const response = await fetch("http://localhost:8010/tasks", {
        method: "GET",
        credentials: "include",
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      const tasks = await response.json();
      await displayTodoList(tasks);
      console.log(tasks); // or do something with tasks
    } catch (error) {
      console.log(error);
    }
  });
  
  