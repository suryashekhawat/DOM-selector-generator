chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "capture_dom") {
        console.log("Sending data to server...");
        fetch("http://localhost:5000/save-dom", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ domData: message.data, url: sender.tab.url })
        })
        .then(response => response.json())
        .then(data => console.log("Server Response:", data))
        .catch(error => console.error("Error sending data:", error));
    }
});
