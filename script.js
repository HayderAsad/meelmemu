
const menuContainer = document.getElementById('menu');



// =============== Функция для получения данных с API
async function fetchMenu() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood', {
        method: 'GET' 
    });

    const data = await response.json();
    if (data.meals) {
        displayMenu(data.meals);
    } else {
        menuContainer.innerHTML = '<p>Нет доступных рецептов.</p>';
    }
}

// =================== Функция для отображения меню на странице
function displayMenu(items) {
    menuContainer.innerHTML = ''; 

    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        menuItem.innerHTML = `
            <img src="${item.strMealThumb}" alt="${item.strMeal}">
            <h3>${item.strMeal}</h3>
            <p>${item.idMeal}</p>
        `;
        menuContainer.appendChild(menuItem);
    });
}

fetchMenu();
