import React from 'react';

const ExerciseEvent = (props) => {
    const deleteExercise = async (event, exerciseEventId, callback) => {
        event.preventDefault();
        await fetch(`/delete/${exerciseEventId}`, {
            method: 'delete',
        });
        callback();
    };
    return (
        <>
            <div className='exerciseEvent' data-testid='exerciseEvent' style={{ color: props.colour, borderLeft: 'solid 16px', borderBottom: 'solid 2px' }}>
                <p> 
                    &emsp; <small>{props.exerciseDate}</small><br />
                    &emsp; <b>{props.exerciseEventTitle}</b>&emsp;&emsp;&emsp; <br />
                    <button 
                        className='deletionBtn' 
                        data-testid='deletionBtn' 
                        onClick={event => deleteExercise(event, props.id, props.restateAfterDelete)}
                    > 
                    X
                    </button>
                    <span className='achievementSpan'>
                        &emsp; {props.achievement}
                    </span>
                </p>
            </div>
            <br />
        </>
    )
}

export default ExerciseEvent;
