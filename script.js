//  let marks =[
//     97,82,87,62,90
//  ];
// for (let index = 0; index < marks.length; index++) {
//   console.log(marks[index]);
// };
// let sum = 0;

// for(let val of marks){
//       sum = sum+val;
// };
// let avg = sum / marks.length;
// console.log("avg of marks is =",avg);

// let items = [250,645,300,900,50];
// let i = 0;

// for(let val of items ){
//       let offer = val / 10;
//       items[i] = items[i] - offer;
//       console.log(`value after offer is ${items[i]}`)
//       i++;
// };

// let marvelHeros =["spiderman","Drstrange","ironman","superman","batman"];


// console.log(marvelHeros);
// console.log(marvelHeros.slice(1,2));


// let a = prompt("Enter your favorite color"); // Prompt user input

// document.body.style.backgroundColor = a; // Change the background color to user input
// let color = ["blue","red"]; // Define the color for comparison

// // Compare input with color (case-insensitive)
// if(document.body.style.backgroundColor != color) {
    // };
    // console.log("Error: The background color is not blue.");
    

let a = prompt("Enter your favorite color"); // Prompt user input

document.body.style.backgroundColor = a; // Change the background color to user input

// Define an array of valid colors
let validColors = ["blue", "red", "black", "green","yellow","pink","orange","purple","brown","white","gray"];

// Check if the user's input matches any of the valid colors (case-insensitive)
if (!validColors.includes(a.toLowerCase())) {
    document.body.style.backgroundImage = "url('data:image/jpeg;base64,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')";
    document.write("<h1>Your Favorite is not available  "+ a );
} else {
    document.write("<h1>Your Favorite is <br>"+ a );
}


// console.log("Error: The entered color is not a valid option.");
// console.log(`Background color changed to ${a}.`);
