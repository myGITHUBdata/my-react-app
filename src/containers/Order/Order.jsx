import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header/Header';
import Address from '../../components/address/address';

class Order extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
            <div>
                <Header title="订单结算页"/>
                <Address/>
                <h1>订单页面</h1>
            </div>
        )
    }
}

export default Order