import { ConsoleSqlOutlined } from '@ant-design/icons'
import { Card, Col, Input, Row } from 'antd'
import ColumnGroup from 'antd/es/table/ColumnGroup'
import Link from 'antd/es/typography/Link'
import millify from 'millify'
import React, { useEffect, useState } from 'react'

const CryptoCurrensies = () => {

    const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '07ddc9666cmsh3183f582f7f1926p125c38jsn552afed858dc',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };
    const [coins, setCoins] = useState()
    useEffect(() => {
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                setCoins(data.data?.coins)
                console.log(data.data?.coins)
            })
            .catch(err => console.error('error:' + err));
    }, [])

    return (
        <>
            {/* <div className="search-crypto">
                <Input
                    placeholder="Search Cryptocurrency"
                    onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                />
            </div> */}
            <Row gutter={[32, 32]} className="crypto-card-container">
                {coins?.slice(0, 10).map((currency) => (
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
        </>
    )
}

export default CryptoCurrensies