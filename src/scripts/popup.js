document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('MyButton');
    
    button.addEventListener('click', async function() {
        try {
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            
            const response = await chrome.tabs.sendMessage(tab.id, {
                action: 'performAction',
                payload: { message: 'Hello from the Popup'}

            });
            
            console.log('Response received:', response);
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
