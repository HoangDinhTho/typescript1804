// console.log('Hello Typescript!');

let a: boolean = true;
let b: boolean = true;
let txtName: string = 'Admin';

let arrName: any = ['Nam', 'Teo', 'Ti' ,4 ];

let arrName02: Array<string | number> = ['Nam', 'Teo', 'Ti', 2];
let arrName03: (string | number)[] = ['Nam', 'Teo', 'Ti', 2];

arrName.push(true);
// console.log(arrName);

let arrNumber: number[] = [1,2,3];
arrNumber.push(2)

enum Color { Red, Blue=10, Green }
// let r: Color = Color.Blue // get value
let n: string = Color[10]; // get name
// console.log(n);

function getName(name: string): void{
    return console.log(name);
}
// getName('name');

let txt: any = 'some text';
// let i = (<string>txt).charAt(1);
let i: string = (txt as string).charAt(1);
// console.log(i)


interface Product{
    readonly _id: string;
    name: string;
    price?: number; // optional
}

function printData(obj: Product): void{
    obj.name = 'TXT';
    console.log(obj.name)
}

// printData({ _id: '1223', name: 'Samsung' })

class User{
    public name: string;
    // constructor(txtName: string){
    //     this.name = txtName;
    // }
    constructor(private age: number){
        this.name = 'Teo';
        this.age = age;
    }
    getTuoi(): number{
        return this.age;
    }
    get tuoi(): number{
        return this.age;
    }
}
const teo = new User(20);
console.log(teo.getTuoi());
console.log(teo.tuoi);
console.log(teo);