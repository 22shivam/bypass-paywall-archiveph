
chrome.action.onClicked.addListener((tab) => {
  const url = tab.url;
  const archiveUrl = \`https://archive.ph/${url}\`;
  chrome.tabs.update(tab.id, { url: archiveUrl });
});

