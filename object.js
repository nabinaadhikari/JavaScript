function createPerson(){  // create name function with return value
    var person=new Object();  // function object
    person.name="nabina";   // variable declaration
    person.age=32;
    return person;  // retun value
}
var nabina = createPerson();  // factory function is created
console.log(nabina);

function createPerson2(){
    var person= {};
     person.name="nabina2";
      person.age= 31;
      return person;
}
var nabina2=createPerson();
console.log(nabina2);

function createPerson3(){
    var person={};
    person['name']="nabin";
    person[age]=70;
    return person;
}
var nabin = createPerson();
alert("name:" + person.name + " " + 'age' + person.age);
