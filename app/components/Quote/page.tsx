'use client';
import React from 'react';
import { Typography, Card, Avatar, Image, Row, Col } from 'antd';

const { Title, Text } = Typography;

const Quote = () => {
  const quotes = [
    {
      id: 1,
      quote:
        'From The Moment I Contacted Them, They Were Professional, Knowledge, And Attentive To My Needs. They Took The Time To Listen To My Preferences And Provide Me With A Wide Range Of Properties That Met My Criteria',
      author: 'Arefin Shuvo',
      position: 'CEO, NoonBrew',
      avatar:
        'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    },
    {
      id: 2,
      quote:
        'From The Moment I Contacted Them, They Were Professional, Knowledge, And Attentive To My Needs. They Took The Time To Listen To My Preferences And Provide Me With A Wide Range Of Properties That Met My Criteria',
      author: 'Arefin Shuvo',
      position: 'CEO, NoonBrew',
      avatar:
        'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    },
    {
      id: 3,
      quote:
        'From The Moment I Contacted Them, They Were Professional, Knowledge, And Attentive To My Needs. They Took The Time To Listen To My Preferences And Provide Me With A Wide Range Of Properties That Met My Criteria',
      author: 'Arefin Shuvo',
      position: 'CEO, NoonBrew',
      avatar:
        'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    },
  ];

  return (
    <div style={{ padding: '0 5%', marginTop: '100px', marginBottom: '150px' }}>
      <div style={{ textAlign: 'center', marginBottom: '70px' }}>
        <Title style={{ fontSize: '40px', fontWeight: 'semibold' }}>
          Kind Words From Our <br /> Happy Customers
        </Title>
      </div>
      <Row gutter={[16, 16]} justify="space-around">
        {quotes.map((quote) => (
          <Col key={quote.id} xs={24} sm={12} md={8}>
            <Card>
              <Image src="/quote.JPG" alt="quote image" preview={false} />
              <div>
                <Text
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#5C5D68',
                  }}
                >
                  {quote.quote}
                </Text>
              </div>
              <div style={{ display: 'flex', marginTop: '20px', gap: '20px' }}>
                <Avatar size={50} src={quote.avatar} />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Text strong style={{ fontSize: '18px' }}>
                    {quote.author}
                  </Text>
                  <Text style={{ color: '#5C5D68' }}>{quote.position}</Text>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Quote;
