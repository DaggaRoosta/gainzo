
// exercise.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Exercise extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('./exercise/delete/'+this.props.exercise._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <tr>
                <td>{this.props.exercise.exercise_name}</td>
                <td>{this.props.exercise.exercise_description}</td>
                <td>{this.props.exercise.exercise_target_muscle_group}</td>
                <td>{this.props.exercise.exercise_strain_level}</td>
                <td>{this.props.exercise.exercise_variations}</td>
                <td>
                    <Link to={"/edit/"+this.props.exercise._id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default Exercise;