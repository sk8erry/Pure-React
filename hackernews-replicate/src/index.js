import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const Hello = ({ text }) => {
    return(
        <p>{text}</p>
    );
}

ReactDOM.render(<Hello text="gg ez noob" />, document.getElementById('root'));
registerServiceWorker();
