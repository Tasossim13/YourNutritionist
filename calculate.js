function showInput() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const age = document.getElementById('age').value;

    const userInputElement = document.getElementById('userInput');
    userInputElement.innerHTML = `<p>Weight: ${weight}</p><p>Height: ${height}</p><p>Age: ${age}</p>`;
    console.log("All values ok");

    return false;
    //thelei veltiwsi
}
