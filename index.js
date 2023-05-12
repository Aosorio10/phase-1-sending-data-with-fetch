
function submitData(name, email) {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
  
    const body = JSON.stringify({
      name,
      email
    });
  
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers,
      body
    })
      .then(response => response.json())
      .then(data => {
        const newId = data.id;
        document.body.innerHTML += newId;
      })
      .catch(error => {
        document.body.innerHTML += error.message;
      });
  }