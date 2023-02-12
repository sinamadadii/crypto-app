import React, { useEffect, useState } from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import CryptoCurrensies from './CryptoCurrensies';
import News from './News';
const HomePage = () => {

    const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '07ddc9666cmsh3183f582f7f1926p125c38jsn552afed858dc',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };
    const [stats, setStats] = useState()
    useEffect(() => {
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                setStats(data.data?.stats)
                // console.log(data.data?.stats)
            })
            .catch(err => console.error('error:' + err));
    }, [])

    return (
        <>
            {/* {stats?.map((stats, i) => {
                return <h1 key={i}>{stats}</h1>
            })} */}
            <Typography.Title level={2} className='heading' >Global Crypto Stats</Typography.Title>
            <Row>
                <Col span={12} > <Statistic title='Total Cryptocurrencies' value={millify(stats.total)} /> </Col>
                <Col span={12} > <Statistic title='Total Coins' value={millify(stats.totalCoins)} /> </Col>
                <Col span={12} > <Statistic title='Total Exchanges' value={millify(stats.totalExchanges)} /> </Col>
                <Col span={12} > <Statistic title='Total Market Cap' value={millify(stats.totalMarketCap)} /> </Col>
                <Col span={12} > <Statistic title='Total 24h Volume' value={millify(stats.total24hVolume)} /> </Col>
                <Col span={12} > <Statistic title='Total Markets' value={millify(stats.totalMarkets)} /> </Col>
            </Row>
            <div className='home-heading-container'>
                <Typography.Title level={2} className='home-title' >Top 10 CryptoCurrensies in the world</Typography.Title>
                <Typography.Title level={3} className='show-more'><Link to='/cryptocurrencies'>show more</Link></Typography.Title>
            </div>
            <CryptoCurrensies simplified />
            <div className='home-heading-container'>
                <Typography.Title level={2} className='home-title' >Latest Crypto News</Typography.Title>
                <Typography.Title level={3} className='show-more'><Link to='/cryptocurrencies'>show more</Link></Typography.Title>
            </div>
            <News simplified />
        </>
    )
}

export default HomePage