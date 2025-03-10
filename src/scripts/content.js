console.log("Hello from content.js");

chrome.runtime.sendMessage({ message: "hello" }, function(response) {
  console.log(response?.message ||  "No response from background.js");
});