import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import CryptoCurrensies from './components/CryptoCurrensies';
import Excahnges from './components/Excahnges';
import CryptoDetailes from './components/CryptoDetailes';
import News from './components/News';


const App = () => {
  return (
    <div>
      <Layout>
        <div className='app'>
          <Navbar />
        </div>

        <Layout>
          <div className='main'>
            <Layout>
              <div className='routes'>
                <Routes>
                  <Route exact path='/' element={<HomePage />}></Route>
                  <Route exact path='/excahnges' element={<Excahnges />}></Route>
                  <Route exact path='/cryptocurrencies' element={<CryptoCurrensies />}></Route>
                  <Route exact path='/crypto/:coinID' element={<CryptoDetailes />}></Route>
                  <Route exact path='/news' element={<News />}></Route>
                </Routes>
              </div>
            </Layout>
          </div>

          <div className='footer'>
            <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
              CryptoCurrensies<br />
              All rights reserved
            </Typography.Title>
            <Space>
              <Link to='/'>Home</Link>
              <Link to='/cryptocurrencies'>CryptoCurrensies</Link>
              <Link to='/news'>News</Link>
            </Space>
          </div>
        </Layout>
      </Layout>
    </div>
  )
}

export default App