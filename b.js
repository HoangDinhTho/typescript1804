var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(age, height) {
        if (age === void 0) { age = 10; }
        if (height === void 0) { height = 160; }
        this.age = age;
        this.height = height;
        this.name = 'Teo';
        this.age = age;
    }
    Person.prototype.getTuoi = function () {
        return this.age;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(age) {
        return _super.call(this, age) || this;
        // this.height = height;
        // this.age = 11;
    }
    return Student;
}(Person));
var s = new Student(22);
// s.setName('Ti')
console.log(s);
