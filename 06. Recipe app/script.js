const meals = document.getElementById('meals');
const favoriteContainer = document.getElementById('fav-meals');

getRandomMeal();
fetchFavMeals();

async function getRandomMeal(){
    //response
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php'); 
    //to JSON
    const respData = await resp.json();
    //to array
    const randomMeal = respData.meals[0];

    console.log(randomMeal);

    addMeal(randomMeal, true);
}

async function getMealById(id){
    const resp = await fetch('www.themealdb.com/api/json/v1/1/lookup.php?i='+id);
    const respData = await resp.json();
    const meal = respData.meals[0];
    return meal;
}


async function getMealBySearch(term){
    const meals = await fetch('www.themealdb.com/api/json/v1/1/search.php?s='+term);
}

//CREATES THE FAV MEAL SECCTION
function addMeal(mealData, random = false){
    const meal = document.createElement('div');
    meal.classList.add('meals');
    meal.innerHTML=`
            ${random ? `
                <span class="random">
                    Recipe for you
                </span>
            ` : ''}
            <div class="meal-header">
                <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
            </div>
            <div class="meal-body">
                <h4>${mealData.strMeal}</h4>
                <button class="fav-btn">
                    <i class="fa fa-heart"></i>
                </button>      
            </div>
    `;


    const btn = meal.querySelector('.meal-body .fav-btn')
    btn.addEventListener('click', () => {

        if(btn.classList.contains('active')){
            removeMealLS(mealData.idMeal)
            btn.classList.remove("active");
        }
        else{
            addMealLS(mealData.idMeal)
            btn.classList.add("active");
        }
    });

    meals.appendChild(meal);
}

//SOMEHOW ADD MEAL TO THE LOCAL STORAGE
function addMealLS(mealId){
    const mealIds = getMealsLS();

    localStorage.setItem('mealIds', JSON.stringify([...mealIds, mealId]));
}

//SOMEHOW REMOVE MEAL FROM THE LOCAL STORAGE
function removeMealLS(mealId){
    const mealIds = getMealsLS();

    localStorage.setItem('mealIds', JSON.stringify(mealIds.filter((id) => id !== mealId)));
}

//SOMEHOW GET TH MEALS ???
function getMealsLS(){
    const mealIds = JSON.parse(localStorage.getItem('mealIds'));
    return mealIds === null ? [] : mealIds;
}

//I DON'T KNOW
async function fetchFavMeals(){
    const mealIds = getMealsLS();
    const meals = [];
    
    for(let i=0; i<mealIds.lengh; i++){
        const mealId = mealIds[i];
        
        meal = await getMealById(mealId);
        
        meals.push(meal);
        //addMealFav(meal);
    }
    console.log(meals);
    console.log(meal);
}

////////////////////////CONTINUAR NO FUTURO, NÃO POSSUO CONHECIMENTO SUFICIENTE HOJE 07/08/2022: https://www.youtube.com/watch?v=dtKciwk_si4&list=RDCMUCeU-1X402kT-JlLdAitxSMA&start_radio=1 | TEMPO: 2:20:00

/*
//PUT THE MEAL ON THE SCREEN
function addMealFav(mealData){
    const favMeal = document.createElement("li");

    console.log("testing AAAAAAAAAAAAAAAAAAAAAAAA:"+favMeal);

    favMeal.innerHTML=`
        <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}"><br><span>${mealData.strMeal}</span>
    `;

    favoriteContainer.appendChild(favMeal);
}*/