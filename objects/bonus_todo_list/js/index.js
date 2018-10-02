// *** VARIABLES *** //

var dailyTodos = ["Wake-up","Eat breakfast","Shower","Get dressed"];
var item;


// *** EVENT LISTENERS *** //

$('#addButton').on('click', function(){
    //Get the value from the DOM and reassign it to item
    item = $('#todo').val(); 

    //Pass item to the addItem function
    addItem(item);

    //Reset the DOM value to be empty
    $('#todo').val("");
});

$('#todos').on('click', '.btn-primary', function(){
    $(this).parent().remove(); //Remove the list-group-item from the DOM
});

// *** FUNCTIONS *** //
function addItem(value)
{
    if(value==="fall" || value=="")
    {
        console.log("NOPE");
    } else {
        var output = "";
        output += '<li class="list-group-item">';
        output += '<button class="btn btn-primary">X</button> ';
        output += value;
        output += '</li>';

        $('#todos').append(output);
    }
}

// *** ON PAGE LOAD *** //
for(var i = 0; i < dailyTodos.length; i++)
{
    addItem(dailyTodos[i]);
}
