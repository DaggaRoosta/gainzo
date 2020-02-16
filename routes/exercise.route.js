
// exercise.route.js

const express = require('express');
const exerciseRoutes = express.Router();

// Require Exercise model in our routes module
let Exercise = require('../models/exercise.model');

// Defined POST/ADD route
exerciseRoutes.route('/add').post(function(req, res) {
    let exercise = new Exercise(req.body);
    exercise.save()
        .then(exercise => {
            res.status(200).json({'exercise': 'exercise added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new exercise failed');
        });
});

// Defined get data(index or listing) route
exerciseRoutes.route('/').get(function(req, res) {
    Exercise.find(function(err, exercises) {
        if (err) {
            console.log(err);
        } else {
            res.json(exercises);
        }
    });
});

// Defined edit route
exerciseRoutes.route('/edit/:id').get(function(req, res) {
    let id = req.params.id;
    Exercise.findById(id, function(err, exercise) {
        res.json(exercise);
    });
});

//  Defined update route
exerciseRoutes.route('/update/:id').post(function(req, res) {
    Exercise.findById(req.params.id, function(err, exercise) {
        if (!exercise)
            res.status(404).send("data is not found");
        else
            exercise.exercise_name = req.body.exercise_name;
            exercise.exercise_description = req.body.exercise_description;
            exercise.exercise_target_muscle_group = req.body.exercise_target_muscle_group;
            exercise.exercise_strain_level = req.body.exercise_strain_level;
            exercise.exercise_variations = req.body.exercise_variations;

            exercise.save().then(exercise => {
                res.json('Exercise updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

// Defined delete | remove | destroy route
exerciseRoutes.route('/delete/:id').get(function (req, res) {
    Exercise.findByIdAndRemove({_id: req.params.id}, function(err, exercise){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = exerciseRoutes;