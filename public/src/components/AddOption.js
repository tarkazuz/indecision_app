import React from 'react';

class AddOption extends React.Component{

    addOption= (e)=>{
        e.preventDefault();
        const optionInput= e.target.elements.option.value.trim();
        if(optionInput){
            this.props.handleAddOption(optionInput);
            e.target.elements.option.value="";
        }   
    }

    
    render(){
        return (
        <div>
            <form onSubmit={this.addOption}>
            <div className="addOptForm">
                <input id="input" 
                type="text" 
                name="option" 
                autoFocus
                placeholder="Your option"
                maxLength="100"
                ></input>
                <button className="addOptButton">Add your option</button>
            </div>
            </form>
         </div>
        )
    ;}
}

export default AddOption;