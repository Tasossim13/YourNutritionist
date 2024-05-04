function showInput() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const age = document.getElementById('age').value;

    let gender;

    if (document.getElementById('maleId').checked) {
        gender = document.getElementById('maleId').value;
    } else if (document.getElementById('femaleId').checked) {
        gender = document.getElementById('femaleId').value;
    } else {
        gender = "Not specified";
    }

    const userInputElement = document.getElementById('userInput');
    if(gender=="male" || gender=="female"){
        userInputElement.innerHTML = `<h3>You Should Eat ${calculateDailyCalories(gender,weight,height,age)} Calories Per Day! </h3><h4>Weight: ${weight}</h4><h4>Height: ${height}</h4><h4>Age: ${age}</h4>`;
    }else{
        userInputElement.innerHTML = `<h3>Gender Is Not Specified! </h3>`;
    }
    
    return false;
}

function calculateDailyCalories(gender, weight,height,age){
    let BMR;
    if(gender=="male"){
        BMR = (10*weight) + (6.25*height) - (5*age) +5;
    }else{
        BMR = (10*weight) + (6.25*height) - (5*age) -161;
    }
    return BMR; //leitoyrgei mia xara
}
