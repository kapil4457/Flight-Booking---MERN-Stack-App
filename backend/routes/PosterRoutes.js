const express = require("express");
const { isAuthenticatedUser, authorizeRole } = require("../middleware/auth.js");
const {createPoster , getAllPosters} =  require ('../controllers/PosterController.js')
const router = express.Router();

router.route("/admin/create/poster").post(isAuthenticatedUser , authorizeRole("admin"),createPoster);
router.route("/get/all/posters").get(getAllPosters);

module.exports = router;


