import React, {createElement} from 'react';
import ReactDOM, {render} from 'react-dom';
import App from "./view/App.jsx";

const getCurrentTabUrl = (cb) => chrome.tabs.query({active: true, currentWindow: true}, (tabs) => cb(tabs[0].url));

const postURL = (url) => render(createElement(App, {url: url}, null), document.getElementById('app'));


render(createElement(App, null), document.getElementById('app'));