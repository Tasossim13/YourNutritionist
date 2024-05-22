document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded');
    fetch('http://localhost:3001/recipes')
      .then(response => response.json())
      .then(data => {
        const recipeList = document.getElementById('recipe-list');
        data.forEach(recipe => {
          const li = document.createElement('li');
          li.textContent = `${recipe.name} - ${recipe.nutrition.calories} calories`;
          recipeList.appendChild(li);
        });
      })
      .catch(error => console.error('Error fetching recipes:', error));
  });
  