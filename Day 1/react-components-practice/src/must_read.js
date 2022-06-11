//how to export multiple functions from the same file?

const pi = 3.12;

function doublePie() {
  return pi * 2;
}

//every file can have only one default export
export default pi;
//additional function exports are listed in curly braces
export { doublePie };
