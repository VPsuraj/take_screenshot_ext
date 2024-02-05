// captureFullPageScript.js

// Function to scroll and capture the entire page
function captureFullPage() {
    // Calculate the total height of the page
    const body = document.body;
    const html = document.documentElement;
    const pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  
    // Set the viewport height to the total height of the page
    window.scrollTo(0, pageHeight);
  
    // Wait for a short time to ensure the page is fully scrolled
    setTimeout(function () {
      // Capture the visible tab, which now includes the entire page
      chrome.tabs.captureVisibleTab({ format: "png" }, function (dataUrl) {
        // Send the full-page screenshot dataUrl to the content script
        chrome.runtime.sendMessage({ action: "fullPageScreenshot", dataUrl: dataUrl });
      });
    }, 1000); // Adjust the timeout as needed
  }
  
  // Call the captureFullPage function
  captureFullPage();
  