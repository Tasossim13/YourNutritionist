function storeInput() {
    const weightChoice = document.getElementById('weight').value;
    const usersChoice = document.getElementById('choiceId').value; //contains user's choice (lose weight, gain weight etc)
    const heightChoice = document.getElementById('height').value;
    const ageChoice = document.getElementById('age').value;
    const genderChoice = document.getElementById('genderId').value;
    const exerciseChoice = document.getElementById('exerciseId').value;

    const userInputElement = document.getElementById('user1');
    let formData = {
        weight: weightChoice,
        height: heightChoice,
        age: ageChoice,
        choice: usersChoice,
        gender:genderChoice,
        exercise: exerciseChoice
     };
    userInputElement.innerHTML = `<p>You choose ${formData.weight} and ${formData.choice}</p>`
    //proteinCalc(formData.weight,formData.choice,formData.exercise);
    //calculateDailyFatIntake(formData.weight,formData.gender,formData.height,formData.age,formData.choice);
    return false;
}

function proteinCalc(weight, choice, exercise){//calculates protein daily intake based on exercise frequency ,or just in weight if exercise is not so often
    let Choicevalue=weight;
    let exerciseValue=weight;

    if(exercise=="sometimes"){
        exerciseValue= exerciseValue*1.3; 
    }else if(exercise=="often"){
        exerciseValue= exerciseValue*1.6; 
    }else if(exercise=="everyDay"){
        exerciseValue= exerciseValue*1.9; 
    }

    if(choice=="lose"){
        Choicevalue = Choicevalue*1.4;
    }else if(choice=="gain"){
        Choicevalue = Choicevalue*1.8;
    }else{
        Choicevalue = Choicevalue*1.1;
    }

    Choicevalue = parseInt(Choicevalue);
    exerciseValue = parseInt(exerciseValue);

    if(exerciseValue==weight){
        console.log("you must take "+ parseInt(Choicevalue)+"g of Protein Based on your goal")
    }else{
        console.log("you must take "+ parseInt(exerciseValue)+"g of Protein Based on your activity");
    }
    return false;
}

function calculateDailyFatIntake(weight,gender,height,age,goal) {//calculates daily fat intake based on bmr and all the other values
    const calories = calculateDailyCalories(gender,weight,height,age);
    console.log(calories)
    let minFat;
    let maxFat;

    if (goal == 'lose') {
        minFat = 0.20;
        maxFat=0.35;
    } else if (goal == 'gain') {
        minFat=0.25;
        maxFat=0.40;
    } else if (goal == 'maintain') {
        minFat=0.25;
        maxFat=0.35;
    } else {
        console.error("Error");
        return;
    }

    const minFatIntake = (calories * minFat) / 9;
    const maxFatIntake = (calories * maxFat) / 9;
    const average = ((minFatIntake+maxFatIntake)/2);
    console.log("You must take: "+parseInt(average)+"g of fat daily.");
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
