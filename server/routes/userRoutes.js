const express = require("express")
const router = express.Router();
const controllers = require("../controllers/userCtrl.js");
const upload = require("../multerconfig/storageConfig.js");
const Authenticate = require("../middlewares/authmiddleware.js");

router.post("/login", controllers.loginfunc)
router.post('/register', controllers.registerfunc)
router.get('/getrefreshtoken', Authenticate, controllers.getRefreshToken)

router.get('/logout', (req, res) => {
    res.clearCookie('jwtoken', { path: '/' });
    res.status(200).send("User Logout")
})

module.exports = router