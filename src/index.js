import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Hello from './Hello';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

// ReactDOM.render(<h1>Hello world!</h1>, document.getElementById('root'));
// ReactDOM.render(< App/>, document.getElementById('root'));
// ReactDOM.render(<Hello prop={"My React App"}/>, document.getElementById('root'));
ReactDOM.render(
    <div>
        <App />
    </div>
    ,document.getElementById('root'));
registerServiceWorker();