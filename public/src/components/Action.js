import React from 'react';

const Action = (props)=>{
    return (
        <div>
            <button className='choseButton'
            disabled={!props.hasOptions}
            onClick={props.handleChoseOption}>
            What should I do?
            </button>
        </div>
        )
    ;}

export default Action;