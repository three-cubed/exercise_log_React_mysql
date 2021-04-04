import ExerciseEvent from './ExerciseEvent';

const ExerciseEventList = ({ exercises, restateAfterDelete }) => {
    return (
        <>
            {exercises.map((exercise) => (
                <ExerciseEvent 
                key={exercise.id} 
                id={exercise.id}
                colour={exercise.colour} 
                exerciseEventTitle={exercise.exerciseEventTitle} 
                exerciseDate={exercise.exerciseDate} 
                achievement={exercise.achievement} 
                restateAfterDelete={restateAfterDelete}
                />
            ))
            }
        </>
    )
}

export default ExerciseEventList;
