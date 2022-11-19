class Student{

    static count=0;

    constructor(name , age , phone_no, boardmarks){
        
        this.name = name;
        this.age = age;
        this.phone_no = phone_no;
        this.boardmarks = boardmarks;
        // this.eligibilityCheck(this.boardmarks);
        Student.count++;
        
            // this.student_count(Student.count);
        
    }

    student_count(){
        console.log(`total number of students are ${Student.count}`);
    }
    

    eligibilityCheck(){
        
        if(this.boardmarks > 40){
            console.log(`${this.name} is eligible for college`);
        }

        else {
            console.log(`${this.name} is not eligible for college`);
        }
    }

     
 }



const obj1 = new Student('John', 20, 123, 45);
const obj2 = new Student('Rohan', 24, 1234, 55);
const obj3 = new Student('Murat', 19, 12345, 75);
const obj4 = new Student('Maria', 21, 123456, 25);
const obj5 = new Student('Suman', 22, 1234567, 35);
// console.log(obj1.age);
obj3.student_count();
obj2.eligibilityCheck();

