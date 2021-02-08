//---createing classes.....

class Person {
    constructor(name="Anonymous", age = 0){
        this.name=name;
        this.age=age;
    }
    greetMe(){
        return `Hi ${this.name}. You are at least ${this.age*365 } days old`
    }
}

class Student extends Person{
    constructor (name, age, study){
        super(name, age);
        //adding to the parent constructor
        this.study=study;
    }
    //adding new method too
    isStudying(){
        return this.study? `${this.name}, you are stuyding ${this.study}`: "You dont study at the moment.";
    }

    greetMe(){
        let greet = super.greetMe();
        if (this.study){
            greet =greet + `. And you are studying ${this.study}`
        }
            return greet;
    }
}

class Traveler extends Person{
    constructor (name, age, home){
        super(name,age);
        this.home = home;
    }
    greetMe(){
        let newGreet = super.greetMe();
        if(this.home){
            newGreet += `. And you come from ${this.home}`;
        }
        return newGreet;
    }
}

const me = new Person("Zuza", 26);
console.log(me.greetMe());

const stud = new Student("Pamela", 28, "Global Studies");
console.log(stud.isStudying());
console.log(stud.greetMe());

const stud2 = new Student("Asia", 28);
console.log(stud2.isStudying());
console.log(stud2.greetMe());

const trav1 = new Traveler("Vagabond", 33, "");
console.log(trav1.home);
console.log(trav1.greetMe());

const trav2 = new Traveler ("Moomin", 7, "Moominland");
console.log(trav2.greetMe());


const render = ()=>{
const template =(
    <div>
        <h1>Classes</h1>
        <p>Oh, what fun to learn new stuff!!</p>
    </div>
)

const root = document.querySelector("#app");
ReactDOM.render(template, root);
}

render();