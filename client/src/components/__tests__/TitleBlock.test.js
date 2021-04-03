import React from 'react';
import { fireEvent, render, cleanup } from '@testing-library/react';
import { toHaveStyle } from '@testing-library/jest-dom'; 
import renderer from 'react-test-renderer';
import TitleBlock from '../TitleBlock.js';

afterEach(cleanup);

describe('TitleBlock component', () => {
    test('renders', () => {
        render(<TitleBlock />);
    });
    test('matches snapshot', () => {
        const tree = renderer.create(<TitleBlock />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('shows title text', () => {
        const newTitleBLock = render(<TitleBlock />);
        expect(newTitleBLock.getByText(/The Exercise Log/));
    });
    test('shows text entered as props.btnText', () => {
        const newTitleBLock = render(<TitleBlock btnText={'someText'} btnColour={'blue'} />);
        expect(newTitleBLock.getByText(/someText/));
    });
    test('shows colour entered as props.btnColour', () => {
        const newTitleBLock = render(<TitleBlock btnText={'someText'} btnColour={'blue'} />);
        expect(newTitleBLock.getByText(/someText/)).toHaveStyle('background-color: blue');
    });
})
