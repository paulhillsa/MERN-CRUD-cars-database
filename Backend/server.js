const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const routes = require('./routes/carsRoutes.js');

//config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

//connect to mongoDB
mongoose.connect('mongodb+srv://paulhillsa:7414@cluster0.cghzg.mongodb.net/cars?retryWrites=true&w=majority')

// Enabling the api app to use the routes carsRouter.js file.
// All routes will have /cars as the base url.
app.use("/cars", routes);

//port setup
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}
);

