import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';
import { register } from './registerSW';

ReactDOM.render(<App />, document.getElementById('root'));

register();
