var spaceship = {
    location: 'Earth',
    // a function on a object is called a method
    launch: function() {
      //`this` works within the scope its in
        this.location = "Outer space"; // reassignning location property
    },

    // Create a property named `flyTo` and assign it a function
    // change the location based on parameter
    flyTo: function() {

    },
};

console.log("Your location: " + spaceship.location); // => returns earth


//Can you invoke a function expression to launch the spaceship?


spaceship.flyTo('mars');
spaceship.flyTo('jupiter');

console.log("Your location: " + spaceship.location);



//Right now spaceship.flyTo("Mars") & spaceship.flyTo("jupiter") ; would do nothing
//Can you get that function to change this.location?
