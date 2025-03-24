// script.js
document.addEventListener('DOMContentLoaded', function() {
    const mealInput = document.getElementById('meal');
    const drinkInput = document.getElementById('drink');
    const dessertInput = document.getElementById('dessert');
    const showOrderButton = document.getElementById('showOrder');
    const orderDisplay = document.getElementById('orderDisplay');
    const mealDisplay = document.getElementById('mealDisplay');
    const drinkDisplay = document.getElementById('drinkDisplay');
    const dessertDisplay = document.getElementById('dessertDisplay');
    const orderSummary = document.createElement('p'); // Create a new paragraph for the summary
    orderDisplay.appendChild(orderSummary); // Add the summary to the display

    showOrderButton.addEventListener('click', function() {
        const meal = mealInput.value.trim(); // Trim whitespace
        const drink = drinkInput.value.trim();
        const dessert = dessertInput.value.trim();

        if (meal && drink && dessert) {
            mealDisplay.textContent = `Meal: ${meal}`;
            drinkDisplay.textContent = `Drink: ${drink}`;
            dessertDisplay.textContent = `Dessert: ${dessert}`;
            orderDisplay.classList.remove('hidden');

            // Create a summary sentence
            orderSummary.textContent = `You've selected a ${meal}, a refreshing ${drink}, and a delicious ${dessert}. Enjoy!`;

            // Clear input fields after displaying
            mealInput.value = '';
            drinkInput.value = '';
            dessertInput.value = '';
        } else {
            alert('Please enter your meal, drink, and dessert.');
        }
    });

    // Add input validation (optional)
    mealInput.addEventListener('input', function() {
        if (mealInput.value.length > 50) {
            alert('Meal name is too long.');
            mealInput.value = mealInput.value.slice(0, 50); // Limit to 50 characters
        }
    });

    drinkInput.addEventListener('input', function() {
        if (drinkInput.value.length > 30) {
            alert('Drink name is too long.');
            drinkInput.value = drinkInput.value.slice(0, 30);
        }
    });

    dessertInput.addEventListener('input', function() {
        if (dessertInput.value.length > 30) {
            alert('Dessert name is too long.');
            dessertInput.value = dessertInput.value.slice(0, 30);
        }
    });

    // Add a feature where a random order can be generated.
    const randomOrderButton = document.createElement('button');
    randomOrderButton.textContent = 'Random Order';
    document.querySelector('.container').appendChild(randomOrderButton);

    const meals = ['Big Mac', 'Spicy Chicken Sandwich', 'Burrito Bowl', 'Pizza Slice', 'Fish and Chips'];
    const drinks = ['Cola', 'Lemonade', 'Iced Tea', 'Milkshake', 'Water'];
    const desserts = ['Ice Cream', 'Apple Pie', 'Chocolate Cake', 'Donut', 'Brownie'];

    randomOrderButton.addEventListener('click', function() {
        const randomMeal = meals[Math.floor(Math.random() * meals.length)];
        const randomDrink = drinks[Math.floor(Math.random() * drinks.length)];
        const randomDessert = desserts[Math.floor(Math.random() * desserts.length)];

        mealDisplay.textContent = `Meal: ${randomMeal}`;
        drinkDisplay.textContent = `Drink: ${randomDrink}`;
        dessertDisplay.textContent = `Dessert: ${randomDessert}`;
        orderSummary.textContent = `Here's a random order for you: ${randomMeal}, ${randomDrink}, and ${randomDessert}.`;
        orderDisplay.classList.remove('hidden');
    });
});