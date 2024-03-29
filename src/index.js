import React from 'react'
import ReactDOM from 'react-dom'

import 'antd/dist/antd.css'

import * as serviceWorker from './serviceWorker'
import App from '@/App'

ReactDOM.render(<App />, document.getElementById('root'))

/**
 * Swith serviceWorker.register() to enable service worker
 */
serviceWorker.unregister()
