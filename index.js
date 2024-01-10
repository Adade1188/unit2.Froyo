
//user input is split into an array of strings
let flavorss = userInput.split(',').map(flavor => flavor.trim());

//loop is used to iterate through the array of strings
for(let i = 0; i < froyoflavors.length; i++ ){
  alert ("Your Chosen flavors are: " + froyoflavors.join(','));
}


//function that returns an obect
function countFlavors(flavors) {
let flavorCounts = {};

for(let i = 0; i < flavors.length; i++){
let flavor = flavors[i];
if(!flavorCounts[flavor]){
flavorCounts[flavor] = 1;
} else {
flavorCounts[flavor] += 1;
}
}

//function that returns an object
return flavorCounts;
}

//the prompt command
let userInput = prompt("Please enter your flavors separated by commas: vanilla, vanilla, vanilla, strawberry, coffee, coffee");
let froyoFlavors = userInput.split(',').map(flavor => flavor.trim());
let flavorCounts = countFlavors(froyoFlavors);

//console output
console.log(flavorCounts);