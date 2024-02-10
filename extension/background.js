const baseURL = "http://127.0.0.1:5000/"


function send_message(responseMessage, toastType){
    chrome.runtime.sendMessage({action: "message", message: responseMessage, type: toastType});
}
function sleep(duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
}


async function delete_api(url) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const response = await fetch(baseURL + url, {
        method: "DELETE",
        headers: headers
    });

    if (!response.ok) {
        const error = await response.text().then(text => text ? JSON.parse(text) : {}).catch(() => "Failed to make API call");
        send_message(error.message || "Failed to make API call" , "error");
        return Promise.reject(error);
    }
    return response.json();
}

async function post_api(url, data){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const response = await fetch(baseURL + url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        const error = await response.text().then(text => text ? JSON.parse(text) : {}).catch(() => "Failed to make API call");
        send_message(error.message || "Failed to make API call" , "error");
        return Promise.reject(error);
    }
    return response.json();

}

async function get_api(url){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const response = await fetch(baseURL + url, {
        method: "GET",
        headers: headers
    });

    if (!response.ok) {
        const error = await response.text().then(text => text ? JSON.parse(text) : {}).catch(() => "Failed to make API call");
        send_message(error.message || "Failed to make API call" , "error");
        return Promise.reject(error);
    }
    return response.json();
}

async function put_api(url, data){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const response = await fetch(baseURL + url, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        const error = await response.text().then(text => text ? JSON.parse(text) : {}).catch(() => "Failed to make API call");
        send_message(error.message || "Failed to make API call" , "error");
        return Promise.reject(error);
    }
    return response.json();
}

async function removeFromStorage(keys){
    return new Promise((resolve, reject) => {
        chrome.storage.local.remove(keys, () => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            }
            resolve();
        });
    });
}
async function getFromStorage(keys){
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(keys, (result) => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            }
            resolve(result);
        });
    });
}
async function setInStorage(data){
    return new Promise((resolve, reject) => {
        chrome.storage.local.set(data, () => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            }
            resolve();
        });
    });
}

chrome.runtime.onMessage.addListener(

    function(request, sender, sendResponse) {
        if (request.action === "action"){
            send_message("Action received", "success");
        }
    }
);