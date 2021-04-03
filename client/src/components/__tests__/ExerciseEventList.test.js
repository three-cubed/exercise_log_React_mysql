import React from 'react';
import { fireEvent, render, cleanup } from '@testing-library/react';
import { toHaveStyle } from '@testing-library/jest-dom'; 
import renderer from 'react-test-renderer';
import ExerciseEventList from '../ExerciseEventList.js';

afterEach(cleanup);

let arrayOfDummyData = [
    {
        "colour":"green",
        "_id":"605ab77777",
        "exerciseEventTitle":"Mock Running",
        "exerciseDate":"12th March 2021",
        "achievement":"3 miles in 19:34"
    },
    {
        "colour":"purple",
        "_id":"605cd88888",
        "exerciseEventTitle":"Mock Weights",
        "exerciseDate":"13th March 2021"
    }
]

describe('ExerciseEventList component', () => {
    test('renders', () => {
        render(<ExerciseEventList exercises={arrayOfDummyData} restateAfterDelete={() => {}} />);
    });
    test('matches snapshot', () => {
        const tree = renderer.create(<ExerciseEventList exercises={arrayOfDummyData} restateAfterDelete={() => {}} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('shows titles from data (checked by match with original data)', () => {
        const newList = render(<ExerciseEventList exercises={arrayOfDummyData} restateAfterDelete={() => {}} />);
        expect(newList.getByText(`${arrayOfDummyData[0].exerciseEventTitle}`));
        expect(newList.getByText(`${arrayOfDummyData[1].exerciseEventTitle}`));
    });    
    test('shows titles from data (checked by required text)', () => {
        const newList = render(<ExerciseEventList exercises={arrayOfDummyData} restateAfterDelete={() => {}} />);
        expect(newList.getByText(/Running/i));
        expect(newList.getByText(/Weights/i));
    });
    test('shows dates from data', () => {
        const newList = render(<ExerciseEventList exercises={arrayOfDummyData} restateAfterDelete={() => {}} />);
        expect(newList.getByText(/12th/i));
        expect(newList.getByText(/13th/i));
    });
    test('shows acheivement from data', () => {
        const newList = render(<ExerciseEventList exercises={[arrayOfDummyData[0]]} restateAfterDelete={() => {}} />);
        expect(newList.getByText(/3 miles/i));
    });
})
