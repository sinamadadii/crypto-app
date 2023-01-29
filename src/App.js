import React from 'react'
import { Switch, Route, Link, Routes } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, HomePage, Excahnges, CryptoCurrensies, CryptoDetailes, News } from './components';
import './App.css';


const App = () => {
  return (
    <div>
      <div className='app'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/'>
                <HomePage />
              </Route>
              <Route path='/excahnges'>
                <Excahnges />
              </Route>
              <Route path='/cryptocurrensies'>
                <CryptoCurrensies />
              </Route>
              <Route path='/crypto/:coinID'>
                <CryptoDetailes />
              </Route>
              <Route path='/news'>
                <News />
              </Route>
            </Routes>
          </div>
        </Layout>
      </div>
      <div className='footer'>

      </div>
    </div>
  )
}

export default App