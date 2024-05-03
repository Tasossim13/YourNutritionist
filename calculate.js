function showInput() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const age = document.getElementById('age').value;

    const userInputElement = document.getElementById('userInput');
    userInputElement.innerHTML = `<h3>You Should Eat ${calculateDailyCalories("Male",weight,height,age)} Calories Per Day! </h3><h4>Weight: ${weight}</h4><h4>Height: ${height}</h4><h4>Age: ${age}</h4>`;
    console.log("All values ok");

    return false;
}

function calculateDailyCalories(gender, weight,height,age){
    let BMR;
    if(gender=="Male"){
        BMR = (10*weight) + (6.25*height) - (5*age) +5;
    }else{
        BMR = (10*weight) + (6.25*height) - (5*age) -161;
    }
    return BMR; //leitoyrgei kala apla na vrw pws na pairnw timi apo to radio button
}
