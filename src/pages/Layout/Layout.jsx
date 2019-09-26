import React from 'react'
// import PureRenderMixin from 'react-addons-pure-render-mixin'
import API from '@/api/api';
import queryString from 'query-string';
import { connect } from 'react-redux'

import "./Layout.scss";

import { Layout, Menu, Icon, Form, Input, Button, Radio } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: null,
            formLayout: 'horizontal',
        };
    }




    componentDidMount () {
        const parsed = queryString.parse(window.location.search);
        console.log('parsed=',parsed);
        var apiData = {
            userId: parsed.userId,
            orderId: parsed.orderId,
        }
        this.getMallOrderDetailData(apiData);
    }
    

    // 获取订单详情数据
    getMallOrderDetailData = async (apiData) => {
        let result = await API.getMallOrderDetailApi(apiData);
        if (!result) return
        // eslint-disable-next-line 
        if (result.status == 1) {
            console.log('result=',result);

            
            // if (!this.bridge) {
            //     this.initWVBridge();
            // }
            // this.setTypeName(result.data.orderVO);
            // if (result.data.orderVO.isShopAgent) {
            //     this.setState({
            //         merchants: 1,
            //     });
            // }
            // this.setState({
            //     data: result.data,
            //     shopId: result.data.orderItemVOS[0].shopId
            // });
            // this.setBridgeBaseInfoData(result.data);
            return
        }
        this.setState({ error: result.msg })
    }



    handleFormLayoutChange = e => {
        this.setState({ formLayout: e.target.value });
    };

    handleClick = e => {
        console.log('click ', e);
    };

    render() {
        const { formLayout } = this.state;
        const formItemLayout = formLayout === 'horizontal' ? { labelCol: { span: 4 }, wrapperCol: { span: 14 }, } : null;
        const buttonItemLayout = formLayout === 'horizontal' ? { wrapperCol: { span: 14, offset: 4 }, } : null;
        return (
            <div>
                <Layout>
                    <Header>Header</Header>
                    <Layout>
                        {/* 导航区域 */}
                        <Sider>
                            <Menu
                                theme="dark"
                                onClick={this.handleClick}
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                            >
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span>
                                            <Icon type="mail" />
                                            <span>Navigation One</span>
                                        </span>
                                    }
                                >
                                    <Menu.ItemGroup key="g1" title="Item 1">
                                        <Menu.Item key="1">Option 1</Menu.Item>
                                        <Menu.Item key="2">Option 2</Menu.Item>
                                    </Menu.ItemGroup>
                                    <Menu.ItemGroup key="g2" title="Item 2">
                                        <Menu.Item key="3">Option 3</Menu.Item>
                                        <Menu.Item key="4">Option 4</Menu.Item>
                                    </Menu.ItemGroup>
                                </SubMenu>
                                <SubMenu
                                    key="sub2"
                                    title={
                                        <span>
                                            <Icon type="appstore" />
                                            <span>Navigation Two</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="5">Option 5</Menu.Item>
                                    <Menu.Item key="6">Option 6</Menu.Item>
                                    <SubMenu key="sub3" title="Submenu">
                                        <Menu.Item key="7">Option 7</Menu.Item>
                                        <Menu.Item key="8">Option 8</Menu.Item>
                                    </SubMenu>
                                </SubMenu>
                                <SubMenu
                                    key="sub4"
                                    title={
                                        <span>
                                            <Icon type="setting" />
                                            <span>Navigation Three</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="9">Option 9</Menu.Item>
                                    <Menu.Item key="10">Option 10</Menu.Item>
                                    <Menu.Item key="11">Option 11</Menu.Item>
                                    <Menu.Item key="12">Option 12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        {/* 内容区域 */}
                        <Content>
                            <Form layout={formLayout}>
                                <Form.Item label="Form Layout" {...formItemLayout}>
                                    <Radio.Group defaultValue="horizontal" onChange={this.handleFormLayoutChange}>
                                        <Radio.Button value="horizontal">Horizontal</Radio.Button>
                                        <Radio.Button value="vertical">Vertical</Radio.Button>
                                        <Radio.Button value="inline">Inline</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item label="Field A" {...formItemLayout}>
                                    <Input placeholder="input placeholder" />
                                </Form.Item>
                                <Form.Item label="Field B" {...formItemLayout}>
                                    <Input placeholder="input placeholder" />
                                </Form.Item>
                                <Form.Item {...buttonItemLayout}>
                                    <Button type="primary">Submit</Button>
                                </Form.Item>
                            </Form>
                        </Content>
                    </Layout>

                    <Footer>Footer</Footer>
                </Layout>
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
