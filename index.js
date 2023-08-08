// Import stylesheets
import './style.css';

// exmpl-1
// This function takes a callback function as an argument
function performOperation(value, callback) {
  console.log('Starting operation with value:', value);
  // Simulating an asynchronous operation
  setTimeout(() => {
    const result = value * 2;
    // Call the callback function and pass the result
    callback(result);
  }, 1000);
}
// Define a callback function
function handleResult(result) {
  console.log('Received result:', result);
}
// Call the function with the callback
// performOperation(5, handleResult);

// exmpl - 2
function recycle(value, callback) {
  console.log('Initial value:', value);
  setTimeout(() => {
    const result = value * 2 + value * 3;
    callback(result);
  }, 2500);
}
function callbackResult(result) {
  console.log('callbackResult:', result);
}
recycle(13, callbackResult);
