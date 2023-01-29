import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, UserOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import icon from '../cryptocurrency.png';
const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size='large' />
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>Crypto Land</Link>
                </Typography.Title>
                {/* <Button className='menu-control-container'></Button> */}
            </div>
            <Menu theme='dark'>
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to='/home' >Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to='/cryptocurrencies' >Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to='/exchanges' >Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                    <Link to='/news' >News</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar