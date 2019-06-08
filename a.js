// console.log('Hello Typescript!');
var a = true;
var b = true;
var txtName = 'Admin';
var arrName = ['Nam', 'Teo', 'Ti', 4];
var arrName02 = ['Nam', 'Teo', 'Ti', 2];
var arrName03 = ['Nam', 'Teo', 'Ti', 2];
arrName.push(true);
// console.log(arrName);
var arrNumber = [1, 2, 3];
arrNumber.push(2);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 10] = "Blue";
    Color[Color["Green"] = 11] = "Green";
})(Color || (Color = {}));
// let r: Color = Color.Blue // get value
var n = Color[10]; // get name
// console.log(n);
function getName(name) {
    return console.log(name);
}
// getName('name');
var txt = 'some text';
// let i = (<string>txt).charAt(1);
var i = txt.charAt(1);
function printData(obj) {
    obj.name = 'TXT';
    console.log(obj.name);
}
// printData({ _id: '1223', name: 'Samsung' })
var User = /** @class */ (function () {
    // constructor(txtName: string){
    //     this.name = txtName;
    // }
    function User(age) {
        this.age = age;
        this.name = 'Teo';
        this.age = age;
    }
    User.prototype.getTuoi = function () {
        return this.age;
    };
    Object.defineProperty(User.prototype, "tuoi", {
        get: function () {
            return this.age;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
var teo = new User(20);
console.log(teo.getTuoi());
console.log(teo.tuoi);
console.log(teo);
