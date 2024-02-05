
//(((((((((((((((((((((((((  from the popup.js file its also work on the content.js file  )))  )))))))))))))))))))))))))


// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.action === "take_screenshot") {
//         chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//             var activeTab = tabs[0];
//             console.log("🚀 ~ file: background.js:5 ~ chrome.tabs.query ~ activeTab:", activeTab)
//             chrome.tabs.captureVisibleTab(activeTab.windowId, { format: 'jpeg' }, function (dataUrl) {
//                 console.log("dataUrl", dataUrl);
//                 // chrome.tabs.sendMessage(sender.tab.id, {screenshot: dataUrl});
//                 // chrome.tabs.create({url: dataUrl});
//             });
//         });
//     }
// });



// ******************************  from the content.js file  ********************************


// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.action === "take_screenshot") {
//         chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//             var activeTab = tabs[0];
//             console.log("🚀 ~ file: background.js:5 ~ chrome.tabs.query ~ activeTab:", activeTab)

//             if(activeTab.windowId){

//                 chrome.tabs.captureVisibleTab(activeTab.windowId, { format: 'png' }, function (dataUrl) {
//                     if (chrome.runtime.lastError) {
//                         console.error("Error capturing tab:", chrome.runtime.lastError);
//                         return;
//                     }
//                     if (dataUrl) {
//                         console.log("dataUrl", dataUrl);
//                         chrome.tabs.create({ url: dataUrl });
//                     } else {
//                         console.error("Data URL is null.");
//                     }
//                 });

//             }

//         });


//     }
// });


// ******************************   other approach for the single page screenshot at viewarea!!!  ********************************



chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "requestScreenshot") {
        chrome.tabs.captureVisibleTab({ format: "png" }, function (dataUrl) {
            chrome.tabs.sendMessage(sender.tab.id, { action: "screenshot", dataUrl: dataUrl });
        });
    }
    if (message.action === "openNewTab") {
        chrome.tabs.create({ url: message.dataUrl }, function (tab) {
            sendResponse("New tab opened successfully");
        });
        return true;
    }
});


// ******************************   other approach for the single page screenshot at viewarea!!!  ********************************


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& full page screenshot taking it &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// Listen for messages from content.js


// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     if (message.action === "captureFullPage") {
//       // Execute a content script to scroll and capture the entire page
//       chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         const activeTab = tabs[0];
//         chrome.scripting.executeScript({
//           target: { tabId: activeTab.id },
//           function: function () {
//             // Function to scroll and capture the entire page
//             function captureFullPage() {
//               // Calculate the total height of the page
//               const body = document.body;
//               const html = document.documentElement;
//               const pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  
//               // Set the viewport height to the total height of the page
//               window.scrollTo(0, pageHeight);
  
//               // Wait for a short time to ensure the page is fully scrolled
//               setTimeout(function () {
//                 // Capture the visible tab, which now includes the entire page
//                 const dataUrl = document.documentElement.outerHTML;
//                 console.log("🚀 ~ file: background.js:101 ~ dataUrl:", dataUrl)
//                 // Send the full-page screenshot dataUrl to the background script
//                 chrome.runtime.sendMessage({ action: "fullPageScreenshot", dataUrl: dataUrl });
//               }, 1000); // Adjust the timeout as needed
//             }
  
//             // Call the captureFullPage function
//             captureFullPage();
//           },
//         });
//       });
//     }
//   });
  


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& full page screenshot taking it &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&