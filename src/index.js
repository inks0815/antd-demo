import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
//import { Layout} from 'antd';
import thunk from 'redux-thunk'
import todoApp from './reducers/index'
//import App from './components/App'
import Gongwen from './components/Gongwen'
//import Topmenu from './components/Topmenu';
//import Leftmenu from './components/Leftmenu';
//const { Header, Content, Sider } = Layout;

let store = createStore(todoApp,applyMiddleware(thunk))

render(
  <Provider store={store}>
    <div>

      <Gongwen />

    </div>
  </Provider>,
  document.getElementById('root')
)
