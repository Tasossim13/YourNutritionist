function storeInput() {
    const weightChoice = document.getElementById('weight').value;
    const usersChoice = document.getElementById('choiceId').value; //contains user's choice (lose weight, gain weight etc)
    const heightChoice = document.getElementById('height').value;
    const ageChoice = document.getElementById('age').value;
    const genderChoice = document.getElementById('genderId').value;

    const userInputElement = document.getElementById('user1');
    let formData = {
        weight: weightChoice,
        height: heightChoice,
        age: ageChoice,
        choice: usersChoice,
        gender:genderChoice
     };
    userInputElement.innerHTML = `<p>You choose ${formData.weight} and ${formData.choice}</p>`
    //proteinCalc(formData.weight,formData.choice);
      calculateDailyFatIntake(formData.weight,formData.gender,formData.height,formData.age,formData.choice);
    return false;
}

function proteinCalc(weight, choice){//calculates protein intake based on each cutting , or bulking or maintaining weight
    let value=weight;
    if(choice=="lose"){
        value = value*1.4;
    }else if(choice=="gain"){
        value = value*1.8;
    }else{
        value = value*1.1;
    }
    console.log("you must take "+ value+"Protein Based on your goal");
    return false;
}

function calculateDailyFatIntake(weight,gender,height,age,goal) {//thelei douleia
    const calories = calculateDailyCalories(weight,gender,height,age);
    let fatPercentage;

    if (goal == 'lose') {
        fatPercentage = [0.20, 0.35];
    } else if (goal == 'gain') {
        fatPercentage = [0.25, 0.35];
    } else if (goal == 'maintain') {
        fatPercentage = [0.20, 0.35];
    } else {
        console.error('Invalid goal selected');
        return;
    }

    const minFatIntake = (calories * fatPercentage[0]) / 9;
    const maxFatIntake = (calories * fatPercentage[1]) / 9;
    const average = ((minFatIntake+maxFatIntake)/2);
    console.error(average);
    return false;
}

function calculateDailyCalories(gender, weight,height,age){
    let BMR;
    if(gender=="male"){
        BMR = (10*weight) + (6.25*height) - (5*age) +5;
    }else{
        BMR = (10*weight) + (6.25*height) - (5*age) -161;
    }
    return BMR; 
}
