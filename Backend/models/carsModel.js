//require mongoose
const mongoose = require('mongoose');

//create car schema
const carSchema = mongoose.Schema({
    model: Number,
    make: String,
    owner: String,
    registrationNumber: String
});

//export the model (will be sent to controllers)
module.exports = mongoose.model('Car', carSchema);

