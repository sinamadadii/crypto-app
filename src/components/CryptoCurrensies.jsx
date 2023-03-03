import { ConsoleSqlOutlined } from '@ant-design/icons'
import { Card, Col, Input, Row } from 'antd'
import ColumnGroup from 'antd/es/table/ColumnGroup'
import Link from 'antd/es/typography/Link'
import millify from 'millify'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'

const CryptoCurrensies = () => {

    const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '07ddc9666cmsh3183f582f7f1926p125c38jsn552afed858dc',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };
    const [coins, setCoins] = useState([])
    const [cryptoList, setCryptoList] = useState()
    useEffect(() => {
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                setCoins(data.data?.coins)
                setCryptoList(data)
                console.log(data.data?.coins)
            })
            .catch(err => console.error('error:' + err));
    }, []);
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {

        const filteredData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setCoins(filteredData)

    }, [cryptoList, searchTerm])

    // const { data: cryptoList, isFetching } = useGetCryptosQuery();
    // const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);
    // console.log(cryptoList?.data?.coins);
    return (
        <>
            <div className="search-crypto">
                <Input
                    placeholder="Search Cryptocurrency"
                    onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                />
            </div>
            {location.pathname === '/cryptocurrencies' ? (
                <Row gutter={[32, 32]} className="crypto-card-container">
                    {coins?.map((currency) => (
                        <Col
                            xs={24}
                            sm={12}
                            lg={6}
                            className="crypto-card"
                            key={currency.uuid}
                        >

                            {/* Note: Change currency.id to currency.uuid  */}
                            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                                <Card
                                    title={`${currency.rank}. ${currency.name}`}
                                    extra={<img className="crypto-image" src={currency.iconUrl} />}
                                    hoverable
                                >
                                    <p>Price: {millify(currency.price)}</p>
                                    <p>Market Cap: {millify(currency.marketCap)}</p>
                                    <p>Daily Change: {currency.change}%</p>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            ) : (
                <Row gutter={[32, 32]} className="crypto-card-container">
                    {coins?.slice(0, 10).map((currency) => (
                        <Col
                            xs={24}
                            sm={12}
                            lg={6}
                            className="crypto-card"
                            key={currency.uuid}
                        >

                            <Link Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                                <Card
                                    title={`${currency.rank}. ${currency.name}`}
                                    extra={<img className="crypto-image" src={currency.iconUrl} />}
                                    hoverable
                                >
                                    <p>Price: {millify(currency.price)}</p>
                                    <p>Market Cap: {millify(currency.marketCap)}</p>
                                    <p>Daily Change: {currency.change}%</p>
                                </Card>
                            </Link>
                        </Col >
                    ))}
                </Row >
            )}

        </>
    )
}

export default CryptoCurrensies