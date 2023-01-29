import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, UserOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src='/src/cryptocurrency.png' size='large' />
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>Crypto Land</Link>
                </Typography.Title>
                {/* <Button className='menu-control-container'></Button> */}
            </div>
        </div>
    )
}

export default Navbar