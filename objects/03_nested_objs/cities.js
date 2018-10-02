
var cities = [
  {
    name: 'london',
    year: 2017,
    attractions: [
      {name: 'london eye'},
      {name: 'Shoreditch'},
      {name: 'Buckingham Palace'}
    ]
  },
  {
    name: 'Mexico',
    year: 2018,
    attractions: [
      {name: 'Mayan Pyramids'},
      {name: 'Cenote'},
    ]
  },
  {
    name: 'Miami',
    year: 2016,
    attractions: [
      {name: 'Little Havana'},
      {name: 'South Beach'},
    ]
  }
];
for(index in cities){
  var location = cities[index];
  console.log(location.name); // prints name of cities

  //iterate through attractions
  for(attractionIndex in location.attractions){
    var sights = location.attractions[attractionIndex];
    console.log(`things to see are: ${sights.name}`);
  };
};
