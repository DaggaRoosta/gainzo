import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import Exercise from './exercise';


export default class ExerciseList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            exercise: []
        };
    }

    componentDidMount() {
        axios.get('./exercise/')
            .then(response => {
                this.setState({ exercise: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('./exercise/')
            .then(response => {
                console.log(response)
            })
            .then(response => {
                console.log(JSON.stringify(response.data) === JSON.stringify(this.state.exercise))
                if(JSON.stringify(response.data) !== JSON.stringify(this.state.exercise)){
                    this.setState({ exercise: response.data });
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    exerciseList() {
        return this.state.exercise.map(function(currentExercise, i){
            return <Exercise exercise={currentExercise} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Exercise List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Target Muscle Group</th>
                            <th>Strain Level</th>
                            <th>Variations</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.exerciseList() }
                    </tbody>
                </table>
            </div>
        )
    }
}