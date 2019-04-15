import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.scss';
import App from './js/components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
