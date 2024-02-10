function showToast(message, type) {
    const container = document.getElementById('toast-container');
    if (!container) return; // Guard clause if toast-container doesn't exist

    const toast = document.createElement('div');
    toast.classList.add('toast', type === 'success' ? 'toast-success' : 'toast-error');
    toast.textContent = message;

    container.appendChild(toast);
    setTimeout(() => toast.style.opacity = 1, 100);
    setTimeout(() => {
        toast.style.opacity = 0;
        toast.addEventListener('transitionend', () => toast.remove());
    }, 5000);
}

document.getElementById('example').addEventListener('click', async () => {
    chrome.runtime.sendMessage({action: "message"});
});

function injectContentScript() {
    chrome.tabs.sendMessage(tabId, { action: "checkInjected" }, function(response) {
        if (chrome.runtime.lastError || !response.injected) {
            chrome.scripting.executeScript({
                target: { tabId: tabId },
                files: ['contentScript.js']
            }, () => chrome.tabs.sendMessage(tabId, { action: "action" }));
        } else {
            chrome.tabs.sendMessage(tabId, { action: "action" });
        }
    });
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action === "action") {
            showToast(request.message, request.type);
        }
    }
);