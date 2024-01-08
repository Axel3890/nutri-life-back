const { Router } = require('express');
const router = Router();

const { getRecipes, getDetail, addUser } = require("./controllers/index");

router.get("/recipes/:food", getRecipes);
router.get("/detail/:idDetail", getDetail);
router.post("/addUser", addUser)
module.exports = router;