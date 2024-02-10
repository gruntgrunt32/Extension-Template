if (window.contentScriptInjected !== true) {
    window.contentScriptInjected = true;

   

    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.action === "injectContentScript") {
            chrome.runtime.sendMessage({action: "message", message: "Content script injected"});
        } else if (request.action === "checkInjected") {
            sendResponse({ injected: true });
            chrome.runtime.sendMessage({action: "message", message: "Content script already injected"});
        }
        return true; // Keep the messaging channel open for async response
    });
}