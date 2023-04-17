
const emailInput = document.getElementById('email') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;
const form = document.getElementById('login-form') as HTMLFormElement;
const errorContainer = document.getElementById('error-container') as HTMLDivElement;
const errorMessage = document.getElementById('error-message') as HTMLParagraphElement;

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
  
