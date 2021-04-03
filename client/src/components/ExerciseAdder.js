import React, { useState } from 'react';

const ExerciseAdder = ({ addExerciseEvent }) => {
    const [exerciseEventTitle, setExerciseEventTitle] = useState('');
    const [exerciseDate, setExerciseDate] = useState('');
    const [achievement, setAchievement] = useState('');
    const [colour, setColour] = useState('');

    const submitExerciseEvent = (e) => {
        e.preventDefault();
        if (!exerciseEventTitle || !exerciseDate) {
            alert('Make sure you have added an exercise event and when you did it!');
            return;
        }
        addExerciseEvent({ exerciseEventTitle, exerciseDate, achievement, colour });
        setExerciseEventTitle('');
        setExerciseDate('');
        setAchievement('');
        // colour not to be reset, can be left as it is (which is as it is displayed) 
    }

    return (
        <div className='formContainer'>
            <form id='exerciseAdderForm' 
                data-testid='exerciseAdderForm' 
                onSubmit={submitExerciseEvent}
            >
                <div>
                    <br /><label>Exercise:</label><br />
                    <input type='text' placeholder='What was the exercise?' aria-label="titleInput" 
                    value={exerciseEventTitle} 
                    onChange={(e) => setExerciseEventTitle(e.target.value)}
                    />
                </div>
                <div>
                    <br /><label>Day:</label><br />
                    <input type='text' placeholder='When did you do it?' aria-label="dateInput" 
                    value={exerciseDate} 
                    onChange={(e) => setExerciseDate(e.target.value)}
                    />
                </div>
                <div>
                    <br /><label>Achievement:</label><br />
                    <input type='text' placeholder='What did you manage to do?' 
                    value={achievement} 
                    onChange={(e) => setAchievement(e.target.value)}
                    />
                </div>
                <div>
                    <br /><label>Exercise colour:</label><br />
                    <select name="topic" onChange={(e) => setColour(e.target.value)}>
                            <option value="grey">Grey</option>
                            <option value="black">Black</option>
                            <option value="firebrick">Red</option>
                            <option value="coral">Orange</option>
                            <option value="gold">Yellow</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                            <option value="purple">Purple</option>
                            <option value="pink">Pink</option>
                            <option value="saddlebrown">Brown</option>
                    </select>
                </div>
                <br />
                <div className='centred'>
                    <button type='submit' id='submissionBtn' data-testid='submissionBtn'>
                        Save new exercise event!
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ExerciseAdder;
