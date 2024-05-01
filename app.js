/*document.addEventListener('DOMContentLoaded', function() {
    function handleFormSubmit(event) {
        event.preventDefault();

        const element = document.getElementById('tasos');
        element.textContent = 'new text app';

        fetch('http://localhost:3000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                document.getElementById('weight').value,
                document.getElementById('height').value
            })
        })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
    }

    document.getElementById('calculationForm').addEventListener('submit', handleFormSubmit);
});
//ToDo fix submit form and value parsing*/