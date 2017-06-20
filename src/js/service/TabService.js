class TabService {
    getCurrentURL(cb) {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => cb(tabs[0].url));
    }
}

export default new TabService();