import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ExerciseAdder from '../ExerciseAdder.js';

afterEach(cleanup);

describe('ExerciseAdder component', () => {
    test('renders', () => {
        render(<ExerciseAdder />);
    });
    test('matches snapshot', () => {
        const tree = renderer.create(<ExerciseAdder />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('pressing submissionBtn sets off submission of form', () => {
        const mockFunction = jest.fn();
        const dummySubmit = () => {
            window.alert = () => {};  // provides an empty implementation for window.alert
            mockFunction();
        }
        const renderExerciseAdder = render(<ExerciseAdder onSubmit={dummySubmit()} />);
        const submissionBtn = renderExerciseAdder.getByTestId('submissionBtn');
        fireEvent.click(submissionBtn);
        expect(mockFunction).toBeCalled();
    });
})
