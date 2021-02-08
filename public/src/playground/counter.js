class ComponentCounter extends React.Component{
    constructor(props){
        super(props);
        this.plusOne=this.plusOne.bind(this);
        this.minusOne=this.minusOne.bind(this);
        this.resetAll=this.resetAll.bind(this);
        this.state = {
            count: props.count
        };
    }

    componentDidMount(){
        const saveCount = parseInt(localStorage.getItem('count'),10);
        this.setState(()=>{
            if(!isNaN(saveCount)){
                return{
                    count: parseInt(localStorage.getItem('count'),10)
                };
            }

        })
    }

    componentDidUpdate(prevProps, prevState){
        localStorage.setItem('count', this.state.count);
    }
    
    plusOne(){
        this.setState((previousState)=>{
        return {
            count: previousState.count + 1
            }
        }
        );
    }


    minusOne(){
        this.setState((prevState)=>{
            if (prevState.count>0){
                return {
                count: prevState.count-1
                }
            }
            
        }
        )
    }
    
    resetAll(){
        this.setState((prevState)=>{
            return{
                count: 0
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Start your count</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.plusOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.resetAll}>Reset</button>
            </div>
        );
    }
}

ComponentCounter.defaultProps={
    count: 0
}

const app = document.querySelector("#app");
ReactDOM.render(<ComponentCounter/>, app);