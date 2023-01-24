class Person{
    name;
    job;
    age;
    constructor(name,job,age){
    this.name = name;
    this.job = job;
    this.age = age;
    }
    exc(){
        return "Running is fun";
    }
    fetchJob(){
        return (`${this.name}'s job is ${this.job}`);
    }
}

const ching = new Person("Ching","Software Dev", "25");
console.log(ching);
console.log(ching.exc());
console.log(ching.fetchJob());

class Programmer extends Person{
    language;
    constructor(name,job,age,languages){
        super(name,job,age)
        this.language = languages;
        this.busy=true;
    }
    completeTask(){
        return this.busy=false;
    }
    acceptNewTask(){
        if(this.busy){
            return false
        }else{
            return true
        }
    }
    offerNewTask(){
         if(this.acceptNewTask()){
            return (`${this.name} would like to take up a new task`)
         }else{
            return (`${this.name} would not like to take up a new task`)
         }
    }
    learnLanguage(lang){
        return this.language.push(lang);
    }
    listLanguage(){
        return console.log(this.language);
    }

}

const programmer1= new Programmer("Chanty","Software Dev", "26",["Html","Java"]);
console.log(programmer1);
//console.log(programmer1.completeTask())
console.log(programmer1.offerNewTask())
programmer1.learnLanguage('CSS')
programmer1.learnLanguage('JavaScript')
programmer1.listLanguage();

console.log(programmer1.exc());



