function msg(){
    alert("Hey Nabina! Welcome to Javascript World")
}

let x=3;
let y=9;
sum=x+y;
document.write("The total number is:" + sum);


//for in loop

const person = {fnmae:"John", lanme:"Doe", age: 30}; 
let txt =" ";
for (let x in person) {
  txt += person[x] + " ";

console.log(txt);
}

//for loop
//var subjects=["maths","social","science"];
//var marks=new Array();
//var num1;
//for(var i=0;i<subjects.length;i++){
 //num1 = parseFloat(prompt("enter a number of a subjects:"+ subjects[i]));
 //marks[i]=num1;
}
//console.log(i);
//console.log(marks);

// foreach() methods on Arrays

var numbers=[3,5,6,8,9];
let t= " ";
numbers.forEach(myFunction);
  console.log(t);
  function myFunction(value, index, array){
    t+=value+ " ";

  }

  // while loop
  var num;
  var i=0;
  while(i<10){
    console.log(num);
    i++;
  }

 
 


    
