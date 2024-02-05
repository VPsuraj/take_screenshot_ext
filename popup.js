
//++++++++++++++++++= take the screeenshot to click to the icon of the extension ++++++++++++++++++=
document.getElementById('screenshot').addEventListener('click', function() {
    chrome.runtime.sendMessage({action: "requestScreenshot"});
  });