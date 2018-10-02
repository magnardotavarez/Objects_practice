var dishes = [ 'pizza', 'pizza with extra cheese', ' chicken', 'chicken on pizza'];
//
for(index in dishes){
    var dish = dishes[index];
    console.log(dish);
    // console.log(dishes[index]); || or this
}

// but you cant associate dish with price using an array
// an array of objects || an obj of obj's
var menu = [
  // the property name must match!
  // good syntax:
    // commas to seperate each object and key:value pairs
    // no comma on the last one
  {protein: 'chicken', price: 5},
  {protein: 'steak', price: 8},
  {protein: 'fish', price: 10}
];

for(index in menu){
    var plate = menu[index];//passing the entire object into the plate variable
    console.log(`${plate.protein} cost ${plate.price} dollars`);// printing plate at its iteration
    // => Chicken cost 5 dollars
}

// EXERCISE
var dishes = [
  // give the dishes below a price
   {name:"mac & cheese", price: 5},
   {name:"salad"}
];

// run a for in loop that iterates every index item in dishes
// assign the index value( entire obj) to a variable called dish
// using string interpolation, console log the name and price of the dish
