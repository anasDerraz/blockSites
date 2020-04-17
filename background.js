const BLACK_LIST = ["9gag", "youtube", "reddit"];
const sitesToBlock = BLACK_LIST.join("|");
const regex = new RegExp(sitesToBlock, "ig");

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, _tab) {
  if (changeInfo.url && changeInfo.url.search(regex) !== -1) {
    chrome.tabs.executeScript(tabId, {
      code: `window.location.replace('https://www.google.com')`,
    });
  }
});
