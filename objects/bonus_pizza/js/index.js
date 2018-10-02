$(function(){

    //OBJECTS
    var pizza = {
        toppings: [],
        addTopping: function(nameOfTopping){
            var toppingObject = { name: nameOfTopping };
            this.toppings.push(toppingObject);
        }
    };

    var order = {
        pizzas: [],
        cost: 0,
        isReady: false,
        addPizza: function(pizza)
        {
            this.pizzas.push(pizza);
            this.updateOrder();
        },
        updateOrder: function()
        {
            //Let's build this together :)
            $('#order').html(''); //reset it first

            //create an output variable that we can add things to
            var output = '<li class="list-group-item list-group-item-success">Your Order</li>';
            for(index in this.pizzas)
            {
                var localPizza = this.pizzas[index];
                var pizzaNumber = parseInt(index) + 1;
                var info = "Pizza #" + pizzaNumber + " has these toppings: ";
                for(toppingIndex in localPizza.toppings) {
                    var localTopping = localPizza.toppings[toppingIndex];
                    info += localTopping.name + " | ";
                }
                output += '<li class="list-group-item">' + info + '</li>'

            }
            $('#order').html(output); //update the DOM with the new output

            //Reset global pizza
            pizza.toppings = [];
            updateDomPizza(pizza);
        }
    }

    //Event listener
    $('#addTopping').on('click', function(){
        var toppingName = $('#topping').val();
        pizza.addTopping(toppingName);
        updateDomPizza(pizza); //invoke function definition
        $('#topping').val('');
    });

    $('#addPizza').on('click', function(){
        console.log("adding pizza...");
        var localPizza = {
            toppings: pizza.toppings,
        }
        order.addPizza(localPizza);
    });

    //Let's talk about this function definition:
    function updateDomPizza(pizza)
    {
        $('#pizza').html(''); //reset it first

        //create an output variable that we can add things to
        var output = '<li class="list-group-item list-group-item-success">Your Pizza</li>';
        for(index in pizza.toppings)
        {
            var topping = pizza.toppings[index];
            output += '<li class="list-group-item">' + topping.name + '</li>'
        }
        $('#pizza').html(output); //update the DOM with the new output
    }
    updateDomPizza(pizza); //invoke function definition
});
// $(function(){
// //objs
//     var pizza = {
//         toppings: [],
//         addTopping: function(nameOfTopping){
//             var toppingObject = { name: nameOfTopping };
//             this.toppings.push(toppingObject);
//         }
//     };
//
//     var order = {
//         pizzas: [],
//         cost: 0,
//         isReady: false,
//         addPizza: function(pizza)
//         {
//             this.pizzas.push(pizza);
//             this.updateOrder();
//         },
//         updateOrder: function()
//         {
//             //Let's build this together :)
//             $('#order').html(''); //reset it first
//
//             //create an output variable that we can add things to
//             var output = '<li class="list-group-item list-group-item-success">Your Order</li>';
//             for(index in this.pizzas)
//             {
//                 var localPizza = this.pizzas[index];
//                 var pizzaNumber = parseInt(index) + 1;
//                 console.log(pizzaNumber);
//                 output += '<li class="list-group-item"> Pizza #' + pizzaNumber + '</li>'
//             }
//
//             $('#order').html(output); //update the DOM with the new output
//
//             //Reset global pizza
//             pizza.toppings = [];
//             updateDomPizza(pizza);
//         }
//     }
//
//     //Event listener
//     $('#addTopping').on('click', function(){
//         var toppingName = $('#topping').val();
//         pizza.addTopping(toppingName);
//         updateDomPizza(pizza); //invoke function definition
//         $('#topping').val('');
//     });
//
//     $('#addPizza').on('click', function(){
//         console.log("adding pizza...");
//         var localPizza = {
//             toppings: pizza.toppings,
//         }
//         order.addPizza(localPizza);
//     });
//
//     //Let's talk about this function definition:
//     function updateDomPizza(pizza)
//     {
//         $('#pizza').html(''); //reset it first
//
//         //create an output variable that we can add things to
//         var output = '<li class="list-group-item list-group-item-success">Your Pizza</li>';
//         for(index in pizza.toppings)
//         {
//             var topping = pizza.toppings[index];
//             output += '<li class="list-group-item">' + topping.name + '</li>'
//         }
//         $('#pizza').html(output); //update the DOM with the new output
//     }
//     updateDomPizza(pizza); //invoke function definition
// });
