import React from 'react';
import App from './App';
import { cleanup, fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';

afterEach(cleanup);

describe('App component', () => {
    test('renders', () => {
        render(<App />);
    })
    test('matches snapshot', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('App uses ExerciseAdder form', () => {
    test('does not show form (ByTestId) before top btn click', () => {
        const newApp = render(<App />);
        expect(newApp.queryByTestId('exerciseAdderForm')).toBeNull();
    });
    test('shows form (ByTestId) after top btn click', () => {
        const newApp = render(<App />);
        fireEvent.click(newApp.getByText(/add a new exercise/i));
        expect(newApp.getByTestId('exerciseAdderForm')).not.toBeNull();
    });
    test('does not show submit btn (ByText) before top btn click', () => {
        const newApp = render(<App />);
        expect(newApp.queryByText(/Save new exercise event/i)).toBeNull();
    });
    test('shows submit btn (ByText) after top btn click', () => {
        const newApp = render(<App />);
        fireEvent.click(newApp.getByText(/Add a new exercise/i));
        expect(newApp.getByText(/Save new exercise event/i)).not.toBeNull();
    });
});
