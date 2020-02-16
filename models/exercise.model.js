
// exercise.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Exercise = new Schema({
    exercise_name: {
        type: String
    },
    exercise_description: {
        type: String
    },
    exercise_target_muscle_group: {
        type: String
    },
    exercise_strain_level: {
        type: String
    },
    exercise_variations: {
        type: String
    }
},{
    collection: 'exercises'
});

module.exports = mongoose.model('Exercise', Exercise);