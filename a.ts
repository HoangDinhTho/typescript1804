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
console.log(i)
