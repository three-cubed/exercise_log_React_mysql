import React, { useState, useEffect, useCallback } from 'react';
import './stylesheet.css';
import ExerciseEventList from './components/ExerciseEventList';
import ExerciseAdder from './components/ExerciseAdder';
import TitleBlock from './components/TitleBlock';

function App() {
    const [exerciseEvents, setExerciseEvents] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const getExerciseList = useCallback(() => {
        console.log('getExerciseList() is running');
        fetch('/getExercise')
          .then(res => res.json())
          .then(setExerciseEvents);
    });

    useEffect(() => {
        getExerciseList();
    }, []); 

    const executeOnClick = () => {
        setShowForm(!showForm);
    }

    const restateAfterDelete = () => {
        getExerciseList();
    }

    const addExerciseEvent = ( addExerciseEventArguments ) => {
        fetch('/exercisePost', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addExerciseEventArguments)
        }).then(() => { 
            console.log('message from App.js: posted, should now getExerciseList()');
            getExerciseList();
        });
    }
    
    return (
        <div className="App">
            <TitleBlock 
                onClick={executeOnClick}   
                btnText={showForm ? 'Close new exercise event' : 'Add a new exercise event'}  
                btnColour={showForm ? ' #ffcc99' : 'rgba(103, 189, 103, 0.74)'}
            />
            {
            showForm    
            &&
            <ExerciseAdder addExerciseEvent={addExerciseEvent} />
            }
            {showForm && <br />}
            <br />
            <ExerciseEventList 
                exercises={exerciseEvents} 
                restateAfterDelete={restateAfterDelete}
            />
        </div>
    );
}

export default App;
