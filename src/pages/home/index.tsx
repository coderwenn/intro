import React from 'react';
import {
    Breadcrumb,
    Layout, theme
} from 'antd';
import UserInfo from '../../comp/userControls/index'
import { Outlet } from "react-router-dom";
import MenuComp from '@/comp/MenuComp';
import './style.scss'

const { Header, Content, Footer } = Layout;

const Home: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff' }} >
                <div className="demo-logo">
                    这是logo
                </div>
                <MenuComp />
                <UserInfo></UserInfo>
            </Header>
            <Content style={{ padding: '0 48px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 770,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default Home