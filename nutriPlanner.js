function storeInput() {
    const weightChoice = document.getElementById('weight').value;
    const usersChoice = document.getElementById('choiceId').value; //contains user's choice (lose weight, gain weight etc)

    const userInputElement = document.getElementById('user1');
    let formData = {
        weight: weightChoice,
        choice: usersChoice,
     };
    userInputElement.innerHTML = `<p>You choose ${formData.weight} and ${formData.choice}</p>`
    
    return false;
}