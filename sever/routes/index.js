const { Router } = require('express');
const router = Router();

const { getRecipes } = require("./controllers/index");
const getDetail = require('./controllers/getDetail');

router.get("/recipes/:food", getRecipes);
router.get("/detail/:idDetail", getDetail);
module.exports = router;