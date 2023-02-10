import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';


// const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '07ddc9666cmsh3183f582f7f1926p125c38jsn552afed858dc',
//         'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
// };

// fetch(url, options)
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.error('error:' + err));


const HomePage = () => {
    const { data } = useGetCryptosQuery();
    const globalStats = data?.data?.stats;
    console.log(data);

    // if (isFetching) return 'Loading ....';
    return (
        <>
            <Typography.Title level={2} className='heading' >Global Crypto Stats</Typography.Title>
            <Row>
                <Col span={12} > <Statistic title='Total Cryptocurrencies' value={millify(globalStats.total)} /> </Col>
                <Col span={12} > <Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)} /> </Col>
                <Col span={12} > <Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)} /> </Col>
                <Col span={12} > <Statistic title='Total 24h Volume' value={millify(globalStats.total24hVolume)} /> </Col>
                <Col span={12} > <Statistic title='Total Markets' value={millify(globalStats.totalMarkets)} /> </Col>
                {/* <Col span={12} > <Statistic title='Total Markets' value='5' /> </Col> */}
            </Row>
        </>
    )
}

export default HomePage