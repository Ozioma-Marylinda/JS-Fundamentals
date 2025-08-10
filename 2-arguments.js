const input = process.argv.slice(2);

if (input.length === 0) {
  console.log("No argument");
} else if (input.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
