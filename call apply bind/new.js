// CALL
var obj = {num:2};

var addThisObj = function(a){
    return this.num + a;
}

console.log(addThisObj.call(obj, 3));



var addThisObj = function(a, b, c){
    return this.num + a + b + c;
}

console.log(addThisObj.call(obj, 1, 2, 3));


// APPLY
var arr = [1,2,3];

console.log(addThisObj.apply(obj, arr));

// BIND
var bound = addThisObj.bind(obj);

console.log(bound(1,2,3));

// PRINT STUDENT AGE USING THIS AND BIND
var student = {age:20};

var stud =function (){
    return this.age;
}

var bound2 = stud.bind(student);
console.log(bound2());

// CURRYING USING BIND

let multiply = function(x,y){
    
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

let mul = multiply.bind(this, 2, 3);
mul(5);

// CURRYING USING CLOSURE

let multi =function(x){
    return function (y){
        console.log(x*y);
    }
};
let mul2=multi(2);
mul2(5);

