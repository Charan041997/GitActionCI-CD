// Simple calculator app
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

console.log("🚀 App is running!");
console.log("5 + 3 =", add(5, 3));
console.log("4 * 7 =", multiply(4, 7));

module.exports = { add, multiply };
