// document.addEventListener('click', function (e) {
//     console.log("e.target", e.target);
//     chrome.runtime.sendMessage({ action: "take_screenshot" });
// });



// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.screenshot) {
//         console.log('Screenshot Data URL:', request.screenshot);
//         // You can also handle the screenshot data URL further as per your requirements
//     }
// });



// ++++++++++++++= other approach  for single page ++++++++++++++++++++++++


function requestScreenshot() {
    chrome.runtime.sendMessage({ action: "requestScreenshot" });
}

document.addEventListener("click", function (event) {
    requestScreenshot();
});


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "screenshot") {
        var dataUrl = message.dataUrl;
        console.log("Screenshot taken:", dataUrl);
        chrome.runtime.sendMessage({ action: "openNewTab", dataUrl: dataUrl }, function (response) {
            console.log("after the send mesge to the background!!!",response);
        });
    }
});


// ++++++++++++++= other approach  for single page ++++++++++++++++++++++++


// &&&&&&&&&&&&&&&&&&&& for the multipage screenshot&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&



// Send a message to the background script requesting a full-page screenshot

// document.addEventListener("click", function (event) {
//     console.log("event.target", event.target);
//     chrome.runtime.sendMessage({ action: "captureFullPage" });
//   });
// // chrome.runtime.sendMessage({ action: "captureFullPage" });

// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     if (message.action === "fullPageScreenshot") {
//       // Get the dataUrl from the message
//       var dataUrl = message.dataUrl;
  
//       // Perform any additional actions with the full-page screenshot dataUrl
//       console.log("Full-page screenshot taken:", dataUrl);
//     }
//   });


// &&&&&&&&&&&&&&&&&&&& for the multipage screenshot&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&