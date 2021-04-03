import React from 'react';

const TitleBlock = (props) => {
    return (
        <div className='titleBlock'>
            <h2>
                The Exercise Log
            </h2>
            <div className='centred'>
                <button type='button' 
                    style ={{ backgroundColor: props.btnColour}} 
                    className='titleBlockBtn' 
                    onClick={props.onClick}>
                    {props.btnText}
                </button>
            </div>
        </div>
    )
}

export default TitleBlock;
