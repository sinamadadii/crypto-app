import React from 'react'
import { Button, Menu, Typography, Avatar, Layout } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, UserOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import icon from '../cryptocurrency.png';
import Sider from 'antd/es/layout/Sider';
const Navbar = () => {
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className='logo-container'>
                <Avatar src={icon} size='large' />
                {/* <Button className='menu-control-container'></Button> */}
            </div>
            <Typography.Title level={4} className='logo'>
                <Link to='/'>Cryptovers</Link>
            </Typography.Title>
            <Menu className='side-menu' theme='dark'>
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to='/' >Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to='/cryptocurrencies' >Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to='/excahnges' >Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                    <Link to='/news' >News</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default Navbar