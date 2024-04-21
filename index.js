window.onload = function() {
    document.getElementById('calculationForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      
      fetch('http://localhost:3000/save-name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        weight: document.getElementById('weight').value,
        height: document.getElementById('height').value,
        age : document.getElementById("Age")
        })
      })
      .then(response => response.json())
      .then(data => console.log('Success:', data))
      .catch((error) => console.error('Error:', error));
    });
  };
