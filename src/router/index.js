
import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import App from '@/App';

import '@/index.css';

import Home from '@/pages/home/home';
import Layout from '@/pages/Layout/Layout';


const customHistory = createBrowserHistory();


class RouteConfig extends Component {

    render() {
        return (
            <Router history={customHistory}>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/Layout" component={Layout} />
                    <Route path="/" component={App} />
                    {/* <Route path="/city" component={City} />
                    <Route path="/search/:category(/:keyword)" component={Search} />
                    <Route path="/detail/:id" component={Detail} />
                    <Route path="/login(/:router)" component={Login} />
                    <Route path="/user" component={User} />
                    <Route path="/order" component={Order} />
                    <Route path="/manageAddress" component={ManageAddress} />
                    <Route path="/addAddress" component={AddAddress} />
                    <Route path="*" component={NotFound} /> */}
                </Switch>
            </Router>
        )
    }
}

export default RouteConfig

// const BasicRoute = () => (
//     <Router history={customHistory}>
//         <Switch>
//             <Route exact path="/" component={Home} />
//             <Route exact path="/test" component={List} />
//         </Switch>
//     </Router>
// );
// export default BasicRoute;