// Requiring Express.
const express = require("express");
// Requiring Router from Express.
const router = express.Router();
// Requiring controllers from the controllers folder's carsController.js.
const cars = require("../controllers/carsControllers.js");

// All my routes which have a controller attached to them.
router.post("/createCar", cars.createController);
router.get("/", cars.getAllController);
router.get("/oldCars", cars.getOldCarsController);
router.put("/updateCar/:id", cars.updateOneController);
router.put("/updateMany/:owner", cars.updateManyController);
router.delete("/deleteCar/:id", cars.deleteOneController);

// Exporting controllers to server.js.
module.exports = router;