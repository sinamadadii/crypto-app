import { Avatar, Card, Col, Row, Select, Typography } from 'antd';
import { Option } from 'antd/es/mentions';
import moment from 'moment/moment';
import React, { useEffect, useState } from 'react'

const News = () => {
    const url = 'https://cryptocurrency-news2.p.rapidapi.com/v1/cointelegraph';

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '07ddc9666cmsh3183f582f7f1926p125c38jsn552afed858dc',
            'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
        }
    };
    const [news, setNews] = useState()
    useEffect(() => {
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                setNews(data?.data)
                console.log(data?.data)
            })
            .catch(err => console.error('error:' + err));
    }, [])

    return (
        // <>
        //     {news?.map((singleNews, i) => {
        //         return <h1 key={i}>{singleNews.title}</h1>
        //     })}
        // </>
        <Row gutter={[24, 24]}>

            {news?.map((news, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Typography.Title className="news-title" level={4}>{news.title}</Typography.Title>
                                <img style={{ maxWidth: 100, maxHeight: 80, borderRadius: 10 }} src={news?.thumbnail} alt="" />
                            </div>
                            <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                            <div className="provider-container">
                                <Typography.Text>{moment(news.createdAt).startOf().fromNow()}</Typography.Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>

    )
}

export default News