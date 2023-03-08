const express = require("express");
const { isAuthenticatedUser, authorizeRole } = require("../middleware/auth.js");
const {createFlight , updateFlight,deleteFlight,searchFlights, getAllFlights, getAllTos, getAllFroms} = require( '../controllers/FlightController')
const router = express.Router();

router.route("/admin/create/flight").post(isAuthenticatedUser , authorizeRole("admin"),createFlight);
router.route("/admin/update/flight").put(isAuthenticatedUser ,authorizeRole("admin"),updateFlight);
router.route("/admin/delete/flight/:id").delete(isAuthenticatedUser , authorizeRole("admin") , deleteFlight);
router.route("/search/flight").get( searchFlights);
router.route("/all/flights").get(  getAllFlights);
router.route("/all/tos/:destination").get(getAllTos);
router.route("/all/froms").get(getAllFroms);
module.exports = router;


