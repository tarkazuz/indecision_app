/* ----first attempts with React----
//JSX - Java Script XML

//manually creating js code from JSX in Babel
//let template = React.createElement("p", null, "This is JSX");

let obj = {

    title: "Not decisive? Try our app!",
    subtitle: "Here is your solution",
    options: ["a", "b", "c"]
}
var template = (
<div>
    {obj.title ? <h1> {obj.title.toUpperCase()}</h1> : undefined }
    
    <p>Hold up - <i>{obj.subtitle}</i></p>
    {obj.options.length > 0 && <p>Here are you options: {obj.options[0]}</p>}
</div>
);

let user = {
    name: "Zuzita",
    age: 26, 
    location: "Berlin",
    fave: "Doggo"
}

let favePet = ((fave)=>{
    if (fave){
        return <p>You favourite pet: {user.fave}</p>
    }else{
        return undefined;
    }
})

let temp2 = (
<div>
    <h1>This is my first React app</h1>
    <h2>Look how coooooool</h2>
    <p>Hello, {user.name? user.name.toUpperCase() : "Stranger"}</p>
    {favePet(user.fave)}
</div>

);

const appRoot = document.querySelector('#app');
ReactDOM.render(template, appRoot );

*/

/* ---------------let and const ------------
const placeholder = document.querySelector("#app")
let animal ={
    name: "Króliczek",
    breed: "stuffed bunny",
    age: "20-ish",
    location: ""
}

let temp = (
<div>
    <h1>Here it is</h1>
    <p>My name is: {animal.name ? animal.name: "noname"}</p>
    {animal.breed && <p>I am a: {animal.breed.toUpperCase()}</p>}
</div>)

ReactDOM.render(temp, placeholder);
*/

/* ------------arrow functions----------*/

function square (num){
    return num*num;
}

console.log(square(8));
// implicit return value if only one returned
const add = (a,b)=>a+b;

console.log(add(80,7))

const person= {
    name:"Zuzi Sitko"
}

const firstName = (fullName)=> fullName.split(" ")[0];
console.log(firstName(person.name));
console.log(firstName("My doggo is cute"));

const multiplier = {
    numbers:[1,2,3,4,5,6],
    multiplyBy: 5,
    multiply: function (){ 
       const mult= this.numbers.map((number)=> number *this.multiplyBy)
        return mult;
    } 
}
console.log(multiplier.multiply())

/*-----------how to add events amd rerender the app

let count= 0;
const addOne = ()=> {count++; renderApp();
}
const minOne = ()=>{if (count >0){count--; renderApp()}};

const renderApp = ()=> {

const temp2 = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minOne}>-1</button>
        <button onClick={()=> {count = 0; renderApp()}}>Reset count</button>
    </div>
);
const appRoot = document.querySelector('#app');
ReactDOM.render(temp2, appRoot);
}

renderApp();*/

//--------stateless functional component
// const User = (props)=>{
//     return(
//     <div>
//         <p>Name: {props.name} </p>
//         <p>Age: {props.age}</p>
//     </div>
//     )
// };
//------can be rendered just like a class