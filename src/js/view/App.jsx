import React, {Component} from 'react';
import tabService from '../service/TabService';
import {isYoutubeVideoURL} from '../util/utils';
import Success from './Success.jsx';
import Error from './Error.jsx';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {isYoutubeVideo: false, url: ""};
    }

    componentWillMount() {
        tabService.getCurrentURL((url) => {
            this.setState({isYoutubeVideo: isYoutubeVideoURL(url), url: url})
        });
    }

    render() {
        const Result = this.state.isYoutubeVideo ? Success : Error;
        return (<Result url={this.state.url}/>);
    }
}

export default App;