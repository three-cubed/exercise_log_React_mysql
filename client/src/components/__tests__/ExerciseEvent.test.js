import React from 'react';
import { fireEvent, render, cleanup } from '@testing-library/react';
import { toHaveStyle } from '@testing-library/jest-dom'; 
import renderer from 'react-test-renderer';
import ExerciseEvent from '../ExerciseEvent.js';

afterEach(cleanup);

describe('ExerciseEvent component', () => {
    test('renders', () => {
        render(<ExerciseEvent />);
    });
    test('matches snapshot', () => {
        const tree = renderer.create(<ExerciseEvent 
                                        exerciseDate={'99th Octember'} 
                                        exerciseEventTitle={'dummy event title'} 
                                        colour={'blue'} />)
                                    .toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('shows exerciseDate which was entered as prop', () => {
        const newExerciseEvent = render(<ExerciseEvent exerciseDate={'dummy date'} />);
        expect(newExerciseEvent.getByText(/dummy date/));
    });
    test('shows exerciseEventTitle which was entered as prop', () => {
        const newExerciseEvent = render(<ExerciseEvent exerciseEventTitle={'dummy event title'} />);
        expect(newExerciseEvent.getByText(/dummy event title/));
    });
    test('shows achievement which was entered as prop', () => {
        const newExerciseEvent = render(<ExerciseEvent achievement= {'dummy achievement'}/>);
        expect(newExerciseEvent.getByText(/dummy achievement/));
    });
    test('shows colour which was entered as prop', () => {
        const newExerciseEvent = render(<ExerciseEvent colour={'blue'} />);
        expect(newExerciseEvent.getByTestId('exerciseEvent')).toHaveStyle('color: blue');
    });
    test('pressing deletionBtn sets off function', () => {
        const performFunction = jest.fn();
        const newExerciseEvent = render(<ExerciseEvent />);
        const deletionBtn = newExerciseEvent.getByTestId('deletionBtn');
        deletionBtn.onclick = performFunction;
        fireEvent.click(deletionBtn);
        expect(performFunction).toBeCalled();
    });
})
