//An array is an object
var cities = [];
typeof(cities); // => object

//An array is NOT made up of key:value pairs
//SOOO instead of this:
var cities = {
    0: "Los Angeles",
    1: "New York",
    2: "Miami"
}
//It is made up of index:value pairs
//We can just write this:
var cities = ["Los Angeles","New York","Miami"];

//You can access a value buy using an index reference:
cities[0] // => Los Angeles
cities[1] // => New York

//IMPORTANT! Order matters.
var cities = ["Los Angeles","New York","Miami"];
//is DIFFERENT than this:
var cities = ["Miami","Los Angeles","New York"];

console.log(cities);

for(var i = 0; i < cities.length; i++){
  console.log(i); // storing the index value into i and outputting it
}

// for in loop  statement
// resource : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

// You can iterate through an array regardless of size!
for(index in cities) {
    var city = cities[index]; // store each value into a var called city
    console.log(city);
}
