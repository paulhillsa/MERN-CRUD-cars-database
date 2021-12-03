// require created model
const Car = require('../models/carsModel');
// require mongoose
const mongoose = require('mongoose');

//Controllers, these are my CRUD functions
// also sent to my carRoutes file

// Post request to create a new car
exports.createController = (req, res) => {
    const car = new Car({
        model: req.body.model,
        make: req.body.make,
        owner: req.body.owner,
        registrationNumber: req.body.registrationNumber
    })
    car.save()
        .then(result => {
            res.status(201).json({
                message: 'Car created successfully',
                result: result
            })
        }
        )
        .catch(err => {
            res.status(500).json({
                error: err
            })
        }
        )
}

// Get request to get all cars
exports.getAllController = (req, res) => {
    Car.find()
        .then(result => {
            res.status(200).json({
                message: 'Cars fetched successfully',
                result: result
            })
        }
        )
        .catch(err => {
            res.status(500).json({
                error: err
            })
        }
        )
}

// Get request to get a cars older than 5 years
exports.getOldCarsController = (req, res) => {
    Car.find({ model: { $lt: 2016 } })
        .then(result => {
            res.status(200).json({
                message: 'Old Cars fetched successfully',
                result: result
            })
        }
        )
        .catch(err => {
            res.status(500).json({
                error: err
            })
        }
        )
}

// Update request car by id 
exports.updateOneController = (req, res) => {
    Car.findByIdAndUpdate(req.params.id, {
        $set: {
            model: req.body.model,
            make: req.body.make,
            owner: req.body.owner,
            registrationNumber: req.body.registrationNumber
        }
    }, { new: true })
        .then(result => {
            res.status(200).json({
                message: 'Car updated successfully',
                result: result
            })
        }
        )
        .catch(err => {
            res.status(500).json({
                error: err
            })
        }
        )
}

// update many cars by owner
exports.updateManyController = (req, res) => {
    Car.updateMany({ owner: req.params.owner }, {
        $set: {
            model: req.body.model,
            make: req.body.make,
            owner: req.body.owner,
            registrationNumber: req.body.registrationNumber
        }
    })
        .then(result => {
            res.status(200).json({
                message: 'Cars updated successfully',
                result: result
            })
        }
        )
        .catch(err => {
            res.status(500).json({
                error: err
            })
        }
        )
}


// Delete request car by id
exports.deleteOneController = (req, res) => {
    const id = req.params.id;
    Car.findByIdAndRemove(id)
        .then(result => {
            res.status(200).json({
                message: 'Car deleted successfully',
                result: result
            })
        }
        )
        .catch(err => {
            res.status(500).json({
                error: err
            })
        }
        )
}


