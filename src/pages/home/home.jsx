import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { connect } from 'react-redux'

import './home.less';

import { ConfigProvider, DatePicker, message } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');


class Home extends React.Component {
    state = {
        date: null,
    };
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    handleChange = date => {
        message.info(`您选择的日期是: ${date ? date.format('YYYY-MM-DD') : '未选择'}`);
        this.setState({ date });
    }


    render() {
        const { date } = this.state;
        return (
            <div>
                <ConfigProvider locale={zhCN}>
                    <div style={{ width: 400, margin: '100px auto' }}>
                        <DatePicker onChange={this.handleChange} />
                        <div style={{ marginTop: 20 }}>
                            当前日期：{date ? date.format('YYYY-MM-DD') : '未选择'}
                        </div>
                    </div>
                </ConfigProvider>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    };
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
