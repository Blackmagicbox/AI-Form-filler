console.log("Hello from content.js");

chrome.runtime.sendMessage({ message: "hello" }, function(response) {
  console.log(response?.message ||  "No response from background.js");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'performAction') {
        // Perform your action here
        sendResponse({ status: 'success', message: 'Hello from the Popup' });
        return false; // Will send response synchronously
    }
});