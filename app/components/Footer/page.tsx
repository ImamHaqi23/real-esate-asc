'use client';
import React from 'react';
import {
  Layout,
  Row,
  Col,
  Typography,
  Image,
  Button,
  Input,
  Space,
  Divider,
} from 'antd';

const { Footer } = Layout;
const { Text } = Typography;

const FooterComponent = () => {
  return (
    <Footer style={{ backgroundColor: '#0D0C1E', color: 'white' }}>
      <Row justify="space-between" align="middle" style={{ marginTop: '60px' }}>
        <Col span={6}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Image
              src="/real1.JPG"
              alt="logo"
              preview={false}
              style={{ marginLeft: '-30px' }}
            />
            <Text
              style={{
                color: 'white',
                marginTop: '30px',
                fontSize: '18px',
                fontWeight: 'semibold',
              }}
            >
              Investing In Your Future One <br /> Home At A Time{' '}
            </Text>
            <Space.Compact
              style={{
                width: '300px',
                height: '50px',
                marginLeft: '75px',
                marginTop: '30px',
              }}
            >
              <Input
                defaultValue="Enter Your Email"
                style={{
                  padding: '0 10px',
                  backgroundColor: '#0D0C1E',
                  color: '#5C5D68',
                }}
              />
              <Button
                style={{ height: '50px', fontWeight: 'bold' }}
                type="primary"
              >
                Subscribe
              </Button>
            </Space.Compact>
          </div>
        </Col>
        <Col span={6}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '18px',
                marginLeft: '35px',
              }}
            >
              Quick Menu
            </Text>
            <div
              style={{
                marginTop: '20px',
                display: 'flex',
                gap: '10px',
                flexDirection: 'column',
              }}
            >
              <Text style={{ color: '#8F8E97', fontSize: '18px' }}>Home</Text>
              <Text style={{ color: '#8F8E97', fontSize: '18px' }}>Rent</Text>
              <Text style={{ color: '#8F8E97', fontSize: '18px' }}>Sell</Text>
              <Text style={{ color: '#8F8E97', fontSize: '18px' }}>About</Text>
              <Text style={{ color: '#8F8E97', fontSize: '18px' }}>
                Contact
              </Text>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '40px',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '18px',
                marginLeft: '-70px',
              }}
            >
              About Us
            </Text>
            <div
              style={{
                marginTop: '20px',
                display: 'flex',
                gap: '10px',
                flexDirection: 'column',
              }}
            >
              <Text style={{ color: '#8F8E97', fontSize: '18px' }}>
                Payment Plans
              </Text>
              <Text style={{ color: '#8F8E97', fontSize: '18px' }}>
                Make saving More
              </Text>
              <Text style={{ color: '#8F8E97', fontSize: '18px' }}>
                Tax Calculator
              </Text>
              <Text style={{ color: '#8F8E97', fontSize: '18px' }}>
                Talk To Us
              </Text>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '50px',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '18px',
                marginLeft: '-120px',
              }}
            >
              Contact Info
            </Text>
            <div
              style={{
                marginTop: '20px',
                display: 'flex',
                gap: '10px',
                flexDirection: 'column',
              }}
            >
              <Text style={{ color: '#8F8E97', fontSize: '18px' }}>
                123 Main Street, Apt 4B <br /> Los Angeles, CA 90001, USA
              </Text>
              <Text style={{ color: '#8F8E97', fontSize: '18px' }}>
                +088 (123) 456-78-91
              </Text>
              <Text style={{ color: '#8F8E97', fontSize: '18px' }}>
                company@gmail.com
              </Text>
            </div>
          </div>
        </Col>
      </Row>
      <Divider style={{ margin: '40px 0', borderColor: '#434350' }} />
      <div style={{ textAlign: 'center' }}>
        <Text style={{ color: '#8F8E97', fontSize: '18px' }}>
          @ 2023 UiXSHUVO All Rights Reserved
        </Text>
      </div>
    </Footer>
  );
};

export default FooterComponent;
