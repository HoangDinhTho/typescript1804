class Person{
    public name: string;
    constructor(public age: number=10, private height: number = 160){
        this.name = 'Teo';
        this.age = age;
    }
    private getTuoi(): number{
        return this.age;
    }
}
class Student extends Person{
    constructor(age: number){
        super(age);
        // this.height = height;
        // this.age = 11;
    }
}
const s = new Student(22);

console.log(s)