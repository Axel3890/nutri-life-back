const getRecipes = require("./getRecipes");
const getDetail = require("./getDetail");
const addUser = require("./addUser");
const addFav = require("./addFav");
const getFavs = require("./getFavs")
const removeFav = require("./deleteFav");

module.exports = {
    getRecipes,
    getDetail,
    addUser,
    addFav,
    getFavs,
    removeFav,
}