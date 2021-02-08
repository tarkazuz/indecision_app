//JSX - Java Script XML

//manually creating js code from JSX in Babel
//let template = /*#__PURE__*/React.createElement("p", null, "This is JSX");

let obj = {

    title: "Having hard time making decisons?",
    subtitle: "We are heare to help you decide!",
    options: []
}

const formSubmit = (e)=>{
    e.preventDefault();
    const option = e.target.elements.option.value;
    
    if(option){
        obj.options.push(option);
        e.target.elements.option.value= ""
        renderApp();
    }
    
}

const deleteOptions = ()=>{
    obj.options= [];
    choice = "";
    renderApp();
}

const deleteLast = ()=>{
    obj.options.pop();
    choice="";
    renderApp();
}

let choice = "";
const makeDecision=()=>{
    if(obj.options.length >0){
        let rand = Math.floor(Math.random() * obj.options.length);
        choice = obj.options[rand];
        renderApp();
    }
   
}

const renderApp = ()=>{

    const template = (
    <div>
        {obj.title ? <h1> {obj.title.toUpperCase()}</h1> : undefined }
    
        <p>Hold up - <i>{obj.subtitle}</i></p>
        <form onSubmit = {formSubmit}>
            <input type="text" name="option" placeholder="Type in your option" autoFocus></input>
            <button>Add option</button>
    
        </form>
        {obj.options.length > 0 ? <p>You have <i>{obj.options.length}</i> option(s) </p> : <p>You have no options yet.</p>}
        <ol>
        {
            obj.options.map((opt)=>{
                return <li key={opt}>{opt}</li>
            })
        }
        </ol>
        {choice != "" && <p>Here is what you should do: <i>{choice}</i></p>}
        <button onClick={makeDecision} disabled={obj.options.length==0}>Chose an option for me</button>
        <button onClick={deleteLast} disabled={obj.options.length==0}>Delete last option</button>
        <button onClick= {deleteOptions} disabled={obj.options.length==0}>Delete all options</button>
        <footer><b>Created by Zuza</b></footer>
    </div>
    );

    const appRoot = document.querySelector('#app');
    ReactDOM.render(template, appRoot)
}

renderApp();

// 
class OldSyntax {
    constructor(){
        this.name="Name";
    }
}

const oldSyntax = new OldSyntax;
console.log(oldSyntax);

class NewSyntax {
    name="Jen";
    age="33"
}

const newSyntax = new NewSyntax;
console.log(newSyntax);