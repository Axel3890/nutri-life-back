const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const { APP_KEY, APP_ID } = process.env;
const API_URL = 'https://api.edamam.com/api/recipes/v2';


async function getRecipes(req, res){
    const food = req.params.food;

    try {
        const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=${APP_ID}&app_key=${APP_KEY}&imageSize=REGULAR`);
        const recipes = response.data.hits.map(hit => {
            const recipe = hit.recipe;
            return {

                label: recipe.label,
                image: recipe.image,
                ingredients: recipe.ingredientLines,
                calories: recipe.calories,
                time: recipe.totalTime,
                instruccions: recipe.instructionLines,
                id: hit._links.self.href.split('v2/')[1].split('?')[0],
            };
        });

        res.json(recipes);
    } catch (error) {
        
    }
    
}

module.exports = getRecipes;