//An object is a code block
var person = {}

//An object is made up of key:value pairs
var person = {
    key: "value"
}

//Key:value pairs are seperated by a comma,
var person = {
    name: "Your name",
    age: 100,
    location: "Santa Monica"
}
console.log(person.age);//dot notation to return age

//Values can be strings, numbers, booleans, functions and...other objects! :)
var person = {
    name: "Your name",
    age: 100,
    isAlive: true,
    speak: function() {
        console.log("Hello");
    },
    pet: {
        kind: 'cat',
        name: "penelope",
        age: 7,
        meow: function(){
          console.log('no thanks');
        }
    }
}
console.log(person.pet.name);//returns penelope
console.log(person.pet.meow());//returns 'no thanks'


//There are three ways to access the key of an object:
//Dot Notation
person.name;

//Key Reference
person["name"];
person['pet']["name"];
person["speak"](); //dont do

//this - internal to an object only
this.name;

//Example:
var person = {
    name: "Your name",
    age: 100,
    speak: function(){
        return "Hello my name is " + this.name; // has access to the person obj
    }
}

//Which one is better? Depends!
//As a general rule we use dot notation
person.name
person.speak();

//Does this work?
person["speak"]();

//It does! But this looks so much nicer :)

person.speak();

//Why would we ever use key reference?
//So you can access the key with a variable:
keyToAccess = "age";
person[keyToAccess]; //the value would be 100

//So you can do awesome stuff like this:
var car = {
    isMoving: false,
    color: "black",
    doors: 4,
    wheels: 3
}
console.log("### Describe my car ###");
for(key in car)
{
    console.log(key, car[key]);
    //because car.key wouldn't work :)
}
