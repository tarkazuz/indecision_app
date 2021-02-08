import React from 'react';

const Option= (props)=>{
    return (
    <div className='option'>
        <li className='liOption'>{props.text}</li>
        <button className='liButton'
        onClick={(e)=>{
            props.del(props.text)}
        }>
        Remove Option
        </button>
        
    </div>)
;}

export default Option;