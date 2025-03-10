// Base coding to execute in the background
chrome.runtime.onInstalled.addListener(function() {
    console.log(`Extension Installed or updated ${new Date()}`);
    // Set the default value for the extension
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request.message);
    if(request.message === "hello") {
        sendResponse({ message: "Hello from background.js" });
        return true;
    }
});
  