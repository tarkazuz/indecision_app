
class IndecisionApp extends React.Component{
    constructor (props){
        super(props);
        this.handleDeleteOptions= this.handleDeleteOptions.bind(this);
        this.handleChoseOption= this.handleChoseOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state={
            opt: props.opt
        };
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

    handleDeleteOptions(){
        this.setState(()=>{
            return{
                opt:[]
            }
        ;})
    }

    handleDeleteOption(optionRemove){
        this.setState((prevState)=>{
            return{
                opt: prevState.opt.filter((opt)=>
                {
                    return opt != optionRemove;
                })
            }
        })
    }

    handleChoseOption(){
        let choiceIndx=Math.floor(Math.random()*this.state.opt.length);
        return console.log(this.state.opt[choiceIndx])
    ;}

    handleAddOption(option){
        this.setState((prevState)=>{
            return{
                opt: prevState.opt.concat(option) 
            }

        })
    }
    
    
    render(){
        return (
        <div>
            <Header subtitle="Make a decision based on randomness algorithm"/>
            <Action 
                hasOptions={this.state.opt.length>0}
                handleChoseOption={this.handleChoseOption}
            />
            <Options options={this.state.opt} 
                     handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption= {this.handleDeleteOption}/>
                <AddOption
                    handleAddOption={this.handleAddOption}
            />
        </div>
        )
    ;}
}

IndecisionApp.defaultProps={
    opt: []
};

const Header = (props)=>{
        return (
            <div>
                <h1>{props.title}</h1>
                { props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        )
    ;}

Header.defaultProps={
    title: "Indecision"
}


const Action = (props)=>{
    return (
        <div>
            <button 
            disabled={!props.hasOptions}
            onClick={props.handleChoseOption}>
            What should I do?
            </button>
        </div>
        )
    ;}

const Options = (props)=>{
        if (props.options.length>0){

        
            return (
            <div>
                {props.options.length>0 && <ol>Here are your options:
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
                </ol>}
                {props.options.length>0 &&<button onClick={props.handleDeleteOptions}>Delete all options</button>}
            </div>)
         }else{
             return <p>No options yet.</p>
         }
          
    ;}
               

const Option= (props)=>{
        return (
        <div>
            <li>{props.text}
            <button 
            onClick={(e)=>{
                props.del(props.text)}
            }>
            Remove Option
            </button>
            </li>
        </div>)
    ;}


class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.addOption= this.addOption.bind(this);

    }

    addOption(e){
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
                <input type="text" name="option" autoFocus></input>
                <button>Add your option</button>
            </form>
         </div>
        )
    ;}
}



ReactDOM.render(<IndecisionApp />, document.querySelector("#app"));