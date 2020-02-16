import React, { Component } from 'react';
import axios from 'axios';

export default class EditExercise extends Component {
    constructor(props) {
        super(props);

        this.onChangeExerciseName = this.onChangeExerciseName.bind(this);
        this.onChangeExerciseDescription = this.onChangeExerciseDescription.bind(this);
        this.onChangeExerciseTargetMuscleGroup = this.onChangeExerciseTargetMuscleGroup.bind(this);
        this.onChangeExerciseStrainLevel = this.onChangeExerciseStrainLevel.bind(this);
        this.onChangeExerciseVariations = this.onChangeExerciseVariations.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            exercise_name: '',
            exercise_description: '',
            exercise_target_muscle_group: '',
            exercise_strain_level: '',
            exercise_variations: ''
        }
    }

    componentDidMount() {
        axios.get('/exercise/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    exercise_name: response.data.exercise_name,
                    exercise_description: response.data.exercise_description,
                    exercise_target_muscle_group: response.data.exercise_target_muscle_group,
                    exercise_strain_level: response.data.exercise_strain_level,
                    exercise_variations: response.data.exercise_variations,
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    
    onChangeExerciseName(e) {
        this.setState({
            exercise_name: e.target.value
        });
    }

    onChangeExerciseDescription(e) {
        this.setState({
            exercise_description: e.target.value
        });
    }

    onChangeExerciseTargetMuscleGroup(e) {
        this.setState({
            exercise_target_muscle_group: e.target.value
        });
    }

    onChangeExerciseStrainLevel(e) {
        this.setState({
            exercise_strain_level: e.target.value
        });
    }

    onChangeExerciseVariations(e) {
        this.setState({
            exercise_variations: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            exercise_name: this.state.exercise_name,
            exercise_description: this.state.exercise_description,
            exercise_target_muscle_group: this.state.exercise_target_muscle_group,
            exercise_strain_level: this.state.exercise_strain_level,
            exercise_variations: this.state.exercise_variations,
        };
        console.log(obj);
        axios.post('./exercise/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3 align="center">Update Exercise</h3>
                <form onSubmit={this.onSubmit}>
                
                    <div className="form-group"> 
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.exercise_name}
                                onChange={this.onChangeExerciseName}
                                />
                    </div>

                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.exercise_description}
                                onChange={this.onChangeExerciseDescription}
                                />
                    </div>

                    <div className="form-group">
                        <label>Target Muscle Group: </label>
                        <div className="row">
                            <div className="col form-check">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="targetOptions" 
                                        id="targetBack" 
                                        value="Back"
                                        checked={this.state.exercise_target_muscle_group==='Back'} 
                                        onChange={this.onChangeExerciseTargetMuscleGroup}
                                        />
                                <label className="form-check-label">Back</label>
                            </div>
                            <div className="col form-check">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="targetOptions" 
                                        id="targetBiceps" 
                                        value="Biceps" 
                                        checked={this.state.exercise_target_muscle_group==='Biceps'} 
                                        onChange={this.onChangeExerciseTargetMuscleGroup}
                                        />
                                <label className="form-check-label">Biceps</label>
                            </div>
                            <div className="col form-check">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="targetOptions" 
                                        id="targetCalves" 
                                        value="Calves"
                                        checked={this.state.exercise_target_muscle_group==='Calves'} 
                                        onChange={this.onChangeExerciseTargetMuscleGroup}
                                        />
                                <label className="form-check-label">Calves</label>
                            </div>
                            <div className="col form-check">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="targetOptions" 
                                        id="targetCarry" 
                                        value="Carry"
                                        checked={this.state.exercise_target_muscle_group==='Carry'} 
                                        onChange={this.onChangeExerciseTargetMuscleGroup}
                                        />
                                <label className="form-check-label">Carry</label>
                            </div>
                            <div className="col form-check">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="targetOptions" 
                                        id="targetChest" 
                                        value="Chest"
                                        checked={this.state.exercise_target_muscle_group==='Chest'} 
                                        onChange={this.onChangeExerciseTargetMuscleGroup}
                                        />
                                <label className="form-check-label">Chest</label>
                            </div>
                            <div className="col form-check">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="targetOptions" 
                                        id="targetCore" 
                                        value="Core" 
                                        checked={this.state.exercise_target_muscle_group==='Core'} 
                                        onChange={this.onChangeExerciseTargetMuscleGroup}
                                        />
                                <label className="form-check-label">Core</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col form-check">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="targetOptions" 
                                        id="targetGlutes" 
                                        value="Glutes"
                                        checked={this.state.exercise_target_muscle_group==='Glutes'} 
                                        onChange={this.onChangeExerciseTargetMuscleGroup}
                                        />
                                <label className="form-check-label">Glutes</label>
                            </div>
                            <div className="col form-check">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="targetOptions" 
                                        id="targetHams" 
                                        value="Hams" 
                                        checked={this.state.exercise_target_muscle_group==='Hams'} 
                                        onChange={this.onChangeExerciseTargetMuscleGroup}
                                        />
                                <label className="form-check-label">Hams</label>
                            </div>
                            <div className="col form-check">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="targetOptions" 
                                        id="targetQuads" 
                                        value="Quads" 
                                        checked={this.state.exercise_target_muscle_group==='Quads'} 
                                        onChange={this.onChangeExerciseTargetMuscleGroup}
                                        />
                                <label className="form-check-label">Quads</label>
                            </div>
                            <div className="col form-check">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="targetOptions" 
                                        id="targetShoulders" 
                                        value="Shoulders" 
                                        checked={this.state.exercise_target_muscle_group==='Shoulders'} 
                                        onChange={this.onChangeExerciseTargetMuscleGroup}
                                        />
                                <label className="form-check-label">Shoulders</label>
                            </div>
                            <div className="col form-check">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="targetOptions" 
                                        id="targetSquat" 
                                        value="Squat" 
                                        checked={this.state.exercise_target_muscle_group==='Squat'} 
                                        onChange={this.onChangeExerciseTargetMuscleGroup}
                                        />
                                <label className="form-check-label">Squat</label>
                            </div>
                            <div className="col form-check">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="targetOptions" 
                                        id="targetTriceps" 
                                        value="Triceps" 
                                        checked={this.state.exercise_target_muscle_group==='Triceps'} 
                                        onChange={this.onChangeExerciseTargetMuscleGroup}
                                        />
                                <label className="form-check-label">Triceps</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Strain Level: </label>
                        <div className="row">
                        <div className="col form-check">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="stageOptions" 
                                        id="stageWarmup" 
                                        value="Warmup"
                                        checked={this.state.exercise_strain_level==='Warmup'} 
                                        onChange={this.onChangeExerciseStrainLevel}
                                        />
                                <label className="form-check-label">Warmup</label>
                            </div>
                            <div className="col form-check">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="stageOptions" 
                                        id="stageCompound" 
                                        value="Compound"
                                        checked={this.state.exercise_strain_level==='Compound'} 
                                        onChange={this.onChangeExerciseStrainLevel}
                                        />
                                <label className="form-check-label">Compound</label>
                            </div>
                            <div className="col form-check">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="stageOptions" 
                                        id="stageLight" 
                                        value="Light" 
                                        checked={this.state.exercise_strain_level==='Light'} 
                                        onChange={this.onChangeExerciseStrainLevel}
                                        />
                                <label className="form-check-label">Light</label>
                            </div>
                            <div className="col form-check">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="stageOptions" 
                                        id="stageMedium" 
                                        value="Medium"
                                        checked={this.state.exercise_strain_level==='Medium'} 
                                        onChange={this.onChangeExerciseStrainLevel}
                                        />
                                <label className="form-check-label">Medium</label>
                            </div>
                            <div className="col form-check">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="stageOptions" 
                                        id="stageHeavy" 
                                        value="Heavy" 
                                        checked={this.state.exercise_strain_level==='Heavy'} 
                                        onChange={this.onChangeExerciseStrainLevel}
                                        />
                                <label className="form-check-label">Heavy</label>
                            </div>
                            <div className="col form-check">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="stageOptions" 
                                        id="stageFinisher" 
                                        value="Finisher" 
                                        checked={this.state.exercise_strain_level==='Finisher'} 
                                        onChange={this.onChangeExerciseStrainLevel}
                                        />
                                <label className="form-check-label">Finisher</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group"> 
                        <label>Variations (please use comma-separated values): </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.exercise_variations}
                                onChange={this.onChangeExerciseVariations}
                                />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Update Exercise" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}