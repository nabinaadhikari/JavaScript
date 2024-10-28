function Person(fname,lname,age){
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.fullName = function(){
        return this.fname + " " + this.lname
    };
} 

// created an obect of person
const myPerson = new Person("nabina","adhikari",30);
console.log(myPerson); // object call
console.log(myPerson.fullName()); //using method
    
// return function
function getInfo(){  
return "hello javatpoint! How r u?";  
}  
console.log(getInfo());  

// function apply () method usig array
var arr=[3,5,8,9]; // declaration
var max=Math.max.apply(null,arr); // call function using apply method
console.log(max);

// join array using push 
var array = [1,2,3,4];  
var addarray=[5,6,7,8]  
array.push.apply(array, addarray);  
console.log(array); // it will join all array given in the data


