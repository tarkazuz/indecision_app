import React from 'react';
import AddOption from './AddOption.js';
import Options from './Options.js';
import Action from './Action.js';
import Header from './Header.js';
import OptionModal from './OptionModal.js';



class IndecisionApp extends React.Component{
    state={
        opt: this.props.opt,
        selectedOption: undefined
    }

    componentDidMount(){
        try{
           const json= localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options){

        
            this.setState(()=>{
            return{
                opt: options
            };
            }
            )
        } 
        } catch (e){
            console.log(`Your error: ${e}`)
        }
        
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.opt.length!==this.state.opt.length){
            const json= JSON.stringify(this.state.opt)
            localStorage.setItem('options', json);
        }
    }

    handleDeleteOptions=()=>{
        this.setState(()=>{
            return{
                opt:[]
            }
        ;})
    }

    handleDeleteOption=(optionRemove)=>{
        this.setState((prevState)=>{
            return{
                opt: prevState.opt.filter((opt)=>
                {
                    return opt != optionRemove;
                })
            }
        })
    }

    handleChoseOption= () => {
        let choiceIndx=Math.floor(Math.random()*this.state.opt.length);
        const selected = (this.state.opt[choiceIndx]);
        this.setState(()=>{
            return{
               selectedOption: selected 
            }
        })
    ;}

    handleAddOption = (option) =>{
        this.setState((prevState)=>{
            return{
                opt: prevState.opt.concat(option) 
            }

        })
    }

    handlePickClear=()=>{
        this.setState(()=>{
            return{
            selectedOption: undefined
        };
        }
        )
    }
    
    
    render(){
        return (
        <div>
            <Header subtitle="Make a decision based on randomness algorithm"/>
            <Action 
                hasOptions={this.state.opt.length>0}
                handleChoseOption={this.handleChoseOption}
            />
            <div className='optionsField'>
            <Options options={this.state.opt} 
                     handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption= {this.handleDeleteOption}/>
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
            <OptionModal selectedOption={this.state.selectedOption}
                        handlePickClear={this.handlePickClear}/>
        </div>
        )
    ;}
}

IndecisionApp.defaultProps={
    opt: []
};

export default IndecisionApp;