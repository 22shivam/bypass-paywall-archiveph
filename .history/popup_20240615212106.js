
document.getElementById('redirectButton').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = tabs[0].url;
    const archiveUrl = `https://archive.ph/${url}`;
    chrome.tabs.update(tabs[0].id, { url: archiveUrl });
  });
});

