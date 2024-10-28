

let stud1 = {
    name: "Dinesh",
    class: "11th",
    details: function () {
        return this.name + this.class;
    }
}
let stud2 = {
    name: "Vaibhav",
    class: "11th",
}
 
let x = stud1.details(stud2);
console.log(x);

// example 2

let student1 = {
    name: "nabina",    // declaration of first object
    grade: "10" ,
};

let student2 = {
    name: "Kanchi" ,    // declaration of second obect
    grade: " 2" ,
    introduction: function(){      // create a function to call
        console.log(this.name + " " + "studies in grade" + " " + this.grade + " .");
    }
}

let result= student2.introduction.apply(student1);  //call a function
console.log(result);  // print output


// call () method function 
let employee= {   //declaration with funtion return value
    details: function(desigination, experience){
        return (this.name +" " + this.id + " "+  desigination + experience);
    },
};

let employ1 = {    // object declartion
    name: "sophiya" ,
    id: 34, 
}
let empyoy2= {   // object2 declaration
    name: " sashi",
    id: 56,
}
console.log(employee.details.call(empyoy2,"manager", 4));  // pass argument with applying call method and print it.