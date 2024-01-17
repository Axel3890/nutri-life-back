const { Router } = require('express');
const router = Router();

const { getRecipes, getDetail, addUser, addFav, getFavs, removeFav } = require("./controllers/index");

router.get("/recipes/:food", getRecipes);
router.get("/detail/:idDetail", getDetail);
router.get("/getFavs", getFavs)
router.post("/addUser", addUser);
router.post("/addFav", addFav);
router.post('/removeFav', removeFav);
module.exports = router;