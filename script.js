
// Clears Section 1(mainDiv) when it's called.
const empty = () => {
    document.querySelector('#section1').innerHTML = ``;
}


/**
 *  Changes the content in the Main Div.
 * @param {string} ides - The id elements used for the onclick event.
 * @param {string} img - The img elements used to change the image in the MainDiv.
 * @param {string} heading - The heading elements used to change the heading in the MainDiv.
 * @param {string} paragraph - The paragraph elements used to change the paragraphs in the MainDiv.
 */
const mainDiv = (ides, img, heading, paragraph) => {
    const ids = document.querySelector(ides);

    ids.addEventListener('click', ()=>{
        empty();


        let section = document.querySelector('#section1');
        section.className = "main-content";


        if (section.innerHTML === "") {

            section.innerHTML = `
          <img src="${img}" alt="" />
          <h1 class="heading">${heading}</h1>
          <p class="paragraph">${paragraph}</p>  

          <button class="random-btn" id="random">
        Add 
          </button>
  `
            ;

            askForButton();
            declareButton();

        }
    })
}

// calling the function  that'll change the content of the main div
mainDiv('#dashboard', './icons/gauge-dashboard.png', 'Add Dashboards', 'Dashboard for Intellectual App');
mainDiv('#organizations', './icons/building-modern.png', 'Add organizations', 'The list of organizations');
mainDiv('#locations', './icons/house.png', 'Add Locations', 'Locations are where you receive visitors');
mainDiv('#departments', './icons/human-resources-hierarchy.png', 'Add Departments', 'This list of departments');
mainDiv('#devices', './icons/tablet.png', 'Add Devices', 'The are our Devices');
mainDiv('#visitors', './icons/team-exchange-chat.png','Add Visitors', 'This are your visitors');
mainDiv('#billing', './icons/credit-card.png', 'Add Billing', 'This is where you will get your bills');
mainDiv('#profile', './icons/single-neutral.png','Add Profile', 'This are the user profiles');
mainDiv('#logout', './icons/logout.png', 'Logout', 'Click below to logout');

// Elements used to display Random Food
function declareButton() {
    const random = document.getElementById('random')
}

const mealsEl = document.getElementById('meals'),
    resultHeading = document.getElementById('result-heading'),
    single_mealEl = document.getElementById('single-meal');


// Fetch meal by ID
function getMealById(mealID) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
        .then(res => res.json())
        .then(data => {
            const meal = data.meals[0];

            addMealToDOM(meal);
        });
}

// Fetch random meal from API
function getRandomMeal() {
    // Clear meals and heading
    mealsEl.innerHTML = '';
    resultHeading.innerHTML = '';

    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(res => res.json())
        .then(data => {
            const meal = data.meals[0];

            addMealToDOM(meal);
        });
}

/**
 * Adds meals to DOM
 * @param {Object} meal - Meal Object being fetched from the API.
 */
function addMealToDOM(meal) {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(
                `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
            );
        } else {
            break;
        }
    }

    single_mealEl.innerHTML = `
  <div class="single-meal">
    <h1>${meal.strMeal}</h1>
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
    <div class="single-meal-info">
      ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
      ${meal.strArea ? `<p>${meal.strArea}</p>` : ''}
    </div>
    <div class="main">
      <p>${meal.strInstructions}</p>
      <h2>Ingredients</h2>
      <ul>
        ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
      </ul>
    </div>
  </div>
`;
}

// Event listeners
function askForButton() {
    random.addEventListener('click', getRandomMeal);

    mealsEl.addEventListener('click', e => {
        const mealInfo = e.path.find(item => {
            if (item.classList) {
                return item.classList.contains('meal-info');
            } else {
                return false;
            }
        });

        if (mealInfo) {
            const mealID = mealInfo.getAttribute('data-mealid');
            getMealById(mealID);
        }
    });
}


