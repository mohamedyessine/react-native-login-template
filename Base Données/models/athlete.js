const mongoose = require('mongoose')

const athleteSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    size: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    
    email: {
        type: String,
        required: true
    }
   
});
module.exports = Athlete = mongoose.model('athlete', athleteSchema);