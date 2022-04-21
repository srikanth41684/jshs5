// 1.Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

let parent = {
    fname: "Srikanth",
    lname: "Usnagiri",
    showDetails: function () {
        console.log("Hello" + " " + this.fname + " " + this.lname + " ");

    }
}
// console.log(parent.fname);
parent.showDetails()
let child = {
    fname: "Prudvi",
    age: 23,
    gender: "male"
}

child.__proto__ = parent;///assigning the method and proto type of parent to child
child.showDetails();


// 2.Write code to explain prototype chaining

let obj1 = {
    fname : "Srikanth",
    lname : "Usnagiri",
    showDetails : function () {
        console.log(this.fname + " " + this.lname);
    }
}
obj1.showDetails();
let obj2 = {
    age : 23,
}
obj2.__proto__ = obj1;
obj2.showDetails();
console.log(obj2);

// 3.Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

let array = [1, 2, 3, 5, 6, 7];
let arr2 = {
    getName: function () {

        let result = array.reduce((acc, cur) => acc = acc + cur, 0);
        console.log(result);

    }
}
arr2.getName();
//Write a JavaScript function to retrieveall the names of object's own and inherited properties.

function allKeys(obj) {
    if (!isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    return keys;
}
function isObject(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
}
function Student(name) {
    this.name = name;
}
Student.prototype.rollno = true;
console.log(allKeys(new Student("Naman")));