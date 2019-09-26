import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import initReactFastclick from 'react-fastclick'

// import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
// import { createStore } from 'redux'
import RouteConfig from '@/router'; // 页面路由配置

// import reducer from '@/reducers';
import configureStore from '@/store'

// 骨架屏
import Loader from '@/components/loader/loader';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import * as serviceWorker from '@/serviceWorker';
serviceWorker.unregister();

//解决移动端300毫秒延迟
initReactFastclick();



const store = configureStore()


// 默认实现方式
// ReactDOM.render(
//         <Provider store={store}>
//             <RouteConfig />
//         </Provider>, 
// document.getElementById('root')
// );


// 通过监控页面加载事件，添加骨架屏
document.body.addEventListener('touchstart', function () {});
const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <Component />
        </Provider>,
        document.getElementById('root')
    )
}
document.onreadystatechange = function(){
    // render(RouteConfig)
    if(document.readyState === 'complete'){
        render(RouteConfig)
    }else{
        render(Loader)
    }
}


