// Get the day number from the command line
const day = process.argv[2];

if (!day) {
  console.error('Please provide a day number');
  process.exit(1);
}

// Get the solution for the day using es6 import
const solution = await import(`./Day${day}/index.mjs`);


// Run the solution
console.log(`Day ${day} solution: ${solution.solution()}`)