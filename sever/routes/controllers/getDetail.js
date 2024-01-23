const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const { APP_KEY, APP_ID } = process.env;
const API_URL = 'https://api.edamam.com/api/recipes/v2';


async function getDetail(req, res) {
    const id = req.params.id;

    try {
        const response = await axios.get(
            `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        
        const recipeData = response.data.recipe;
        const { label, image, ingredients, calories, totalTime, instructionLines } = recipeData;

        const simplifiedRecipe = {
            label,
            image,
            ingredients,
            calories: Math.floor(calories),
            totalTime,
            instructionLines,
            id
        };
        res.json(simplifiedRecipe);
    } catch (error) {
        // Handle error

        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = getDetail;

