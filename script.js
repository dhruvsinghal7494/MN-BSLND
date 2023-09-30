async function submitForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username==123456){
        window.location.href = "http://www.w3schools.com";
    }
  
    // Send login credentials to the server for authentication
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
  
    const result = await response.json();
  
    if (result.success) {
      // Redirect to the dashboard or any other authenticated page
      window.location.href = '/dashboard';
    } else {
      alert(result.message);
    }
  }
  