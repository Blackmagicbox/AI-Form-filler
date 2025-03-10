document.getElementById('MyButton').addEventListener('click', function() {
  alert("Button being clicked!");
  
  // Send message to background script
  chrome.runtime.sendMessage({message: "hello from popup"}, function(response) {
    console.log("Response received:", response);
  });
});
