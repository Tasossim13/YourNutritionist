document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded');
    fetch('http://localhost:3001/recipes')
      .then(response => response.json())
      .then(data => {
        const recipeList = document.getElementById('recipe-list');
        data.forEach(recipe => {
          const th = document.createElement('th');
          th.innerHTML= `<u><strong>${recipe.name}</strong> - ${recipe.nutrition.calories} Calories</u>`;
          recipeList.appendChild(th);
          const th2 = document.createElement('tr');
          th2.innerHTML= `<strong>Ingredients: </strong>`;
          recipeList.appendChild(th2);
          recipe.ingredients.forEach(ingredient => {
            const ingredientItem = document.createElement('tr');
            ingredientItem.textContent = ingredient;
            recipeList.appendChild(ingredientItem);
        });
            const instructions =  document.createElement('tr');
            instructions.innerHTML = `<strong>Instructions:</strong> ${recipe.instructions} `
            recipeList.appendChild(instructions);
            const breakP =  document.createElement('br');
            breakP.innerHTML = `<br><br>`
            recipeList.appendChild(breakP);
        });
      })
      .catch(error => console.error('Error fetching recipes:', error));
  });
  