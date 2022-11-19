this.table = 'window table';

this.garage = {

    table : 'garage table'
    // console.log(`cleaning the ${this.table}`)
};

console.log(this.garage.table);


// this inside an object
let johnTable = {

    table : 'johns table'
    // console.log(`cleaning the ${this.table}`);
};

console.log(johnTable.table);

// this inside a method


//inside private variable
let johnsTable = {

    table : 'johns table',
    cleanTable(){
        console.log(`cleaning the ${this.table}`);
    }
    
};

johnsTable.cleanTable();

// or global scope
this.table = 'window table1';

const cleanTable = function(soap){
    console.log(`cleaning the ${this.table} using ${soap}`);
}

cleanTable.call(this, 'some soap');
cleanTable.call(this.garage, 'some soap');
cleanTable.call(johnsTable, 'some soap');

// this inside an inner function
this.table2 = 'window table2';
const cleanTable1 = function(soap){
   
    const innerFunction = (_soap) => {
        console.log(`cleaning the ${this.table2} using ${_soap}`);
    }
    
    innerFunction(soap);
}

cleanTable1.call(this, 'some soap');

// this inside a constructor

//constructor
let createRoom = function(name){
    this.table = `${name}s table`
};

// calling another function
createRoom.prototype.cleanTable = function(soap){
    console.log(`cleaning the ${this.table} using ${soap}`);
}

//use new keyword for every obj
const johnsRoom = new createRoom('John');
const jillsRoom = new createRoom('Jill');

johnsRoom.cleanTable('some soap');
jillsRoom.cleanTable('some soap');


// this inside a class
class createNewRoom{

    constructor(name){
        
        this.table = `${name}s room table`
    }

    cleanTable(soap){
        console.log(`cleaning the ${this.table} using ${soap}`);
    }
}

//use new keyword for every obj
const johnRoom = new createNewRoom('John');
const jillRoom = new createNewRoom('Jill');

johnRoom.cleanTable('some soap');
jillRoom.cleanTable('some soap');
