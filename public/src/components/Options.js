import React from 'react';
import Option from './Option.js';

const Options = (props)=>{
    if (props.options.length>0){

    
        return (
        <div >
            <div className="widgetHeader">
                {props.options.length>0 &&  <h3>Here are your options:</h3>}
                {props.options.length>0 &&<button className='buttonRemove' onClick={props.handleDeleteOptions}>Delete all options</button>}
            </div>
            <ol className='options'>
                {props.options.map((option)=>{
                return (
                    <Option 
                    key={option} 
                    text={option} 
                    del={props.handleDeleteOption}
                    />
                )
                ;}
                )}
            </ol>
           
        </div>)
     }else{
         return <p>No options yet.</p>
     }
      
;}

export default Options;
           




