// Assignment Mod 11 
function multiplicationTable(num) {
  // Check if the input is a valid integer
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    console.log('Error: Please provide a valid integer as input.');
    return;
  }

  // Loop from 1 to 10 and generate multiplication table
  for (let i = 1; i <= 10; i++) {
    let product = num * i;
    console.log(`${num} x ${i} = ${product}`);
  }
}
