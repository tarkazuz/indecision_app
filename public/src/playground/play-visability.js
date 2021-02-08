/*---visability using states---*/

class Visability extends React.Component{
    constructor(props){
        super(props);
        this.showDets = this.showDets.bind(this);
        this.state = {
            visability: false
        };
    }
    
    showDets(){
        this.setState(() => {
            if(!this.state.visability){
                return {
                visability: true
                }
            }else{
                return{
                    visability: false
                }
            }
            
        ;}
        );
    }

    render(){
        return(
            <div>
                <h1>Visability toggle with componenrs</h1>
                <h2>Using states</h2>
                <button onClick={this.showDets}>{this.state.visability ? "Hide details": "Show details"}</button>
                {(this.state.visability)&& <p>Here are some details which can be hidden</p>}
        
            </div>
        );
    }
};

const app = document.querySelector("#app");
ReactDOM.render(<Visability/>, app);




// let dets = "";

// const details= (e)=>{
//     if(dets){
//         dets = "";
//         e.target.innerHTML = "Show details"
//         render();
//     }else{
//         dets = "Here are some details about the app";
//         e.target.innerHTML = "Hide details"
//         render();
//     }
// }



// const render = ()=>{
//     const template = (
//         <div>
//             <h1>Creating visability toggle</h1>
//             <button onClick={details}>Show details</button>
//             {dets && <p>{dets}</p>}
//         </div>
//     )

//     const root = document.querySelector("#app");
//     ReactDOM.render(template, root)
//     }

//     render();