const express = require("express");
const { isAuthenticatedUser, authorizeRole } = require("../middleware/auth.js");
const {loginUser  , registerUser , logout , updatePassword , updateProfile , getAllUsers , deleteUser , changeUserRole} = require( '../controllers/userController.js')
const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").post(logout);

router.route("/me/update").put(isAuthenticatedUser, updateProfile);

router.route("/me/updatePassword").put(isAuthenticatedUser, updatePassword);
router.route("/me/delete/account").put(isAuthenticatedUser, deleteUser);


router.route("/admin/users").get(isAuthenticatedUser,authorizeRole("admin"),getAllUsers);

router.route("/admin/delete/user/:id").delete(isAuthenticatedUser,  authorizeRole("admin") , deleteUser)

router.route("/admin/update/role").put(isAuthenticatedUser , authorizeRole("admin") , changeUserRole)
module.exports = router;


module.exports = router;