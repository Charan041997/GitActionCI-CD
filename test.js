// Simple tests
const { add, multiply } = require('./app.js');

console.log("🧪 Running tests...");

// Test 1
if (add(2, 3) === 5) {
  console.log("✅ Test 1 passed: add(2, 3) = 5");
} else {
  console.log("❌ Test 1 failed");
  process.exit(1);
}

// Test 2
if (multiply(4, 5) === 20) {
  console.log("✅ Test 2 passed: multiply(4, 5) = 20");
} else {
  console.log("❌ Test 2 failed");
  process.exit(1);
}

console.log("🎉 All tests passed!");
