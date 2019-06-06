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
let r: Color = Color.Blue
console.log(r);

