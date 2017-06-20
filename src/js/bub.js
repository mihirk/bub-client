const getCurrentTabUrl = (cb) => chrome.tabs.query({active: true, currentWindow: true}, (tabs) => cb(tabs[0].url));

const postURL = (statusText) => document.getElementById('status').textContent = statusText;


document.addEventListener('DOMContentLoaded', () => getCurrentTabUrl(postURL));