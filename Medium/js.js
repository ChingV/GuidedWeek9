function div(x,y){
    //Changes the output into a float
    //.toFixed(2) sets the amount of allowed decimal places to 2
    const num = parseFloat(x/y).toFixed(2);
    // using ` is different from ' and "
    return `Each person gets ${num} slices of pizza from our ${x} slice pizza`;
    
}
const x = prompt("Please enter the number of pizza slices");
const y = prompt("Please enter the number of people")
console.log(div(x,y));