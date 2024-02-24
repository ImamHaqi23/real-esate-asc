'use client';
import React from 'react';
import { Col, Divider, Image, Row, Typography } from 'antd';

const { Title, Text } = Typography;

const Comfort = () => {
  return (
    <div style={{ backgroundColor: '#0D0C1E' }}>
      <div
        style={{
          padding: '5% 5%',
          position: 'relative',
          paddingBottom: '500px',
        }}
      >
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0 50px',
              }}
            >
              <Title
                level={2}
                style={{
                  color: 'white',
                  fontSize: '55px',
                  fontWeight: 'bold',
                  paddingBottom: '20px',
                }}
              >
                11K+
              </Title>
              <Text
                style={{
                  color: '#434350',
                  fontSize: '18px',
                  fontWeight: 'semibold',
                }}
              >
                Happy Customers <br /> with our services
              </Text>
            </div>
          </Col>
          <Col span={8}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0 50px',
              }}
            >
              <Title
                level={2}
                style={{
                  color: 'white',
                  fontSize: '55px',
                  fontWeight: 'bold',
                  paddingBottom: '20px',
                }}
              >
                22K+
              </Title>
              <Text
                style={{
                  color: '#434350',
                  fontSize: '18px',
                  fontWeight: 'semibold',
                }}
              >
                The best property <br /> we provide
              </Text>
            </div>
          </Col>
          <Col span={8}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0 50px',
              }}
            >
              <Title
                level={2}
                style={{
                  color: 'white',
                  fontSize: '55px',
                  fontWeight: 'bold',
                  paddingBottom: '20px',
                }}
              >
                520+
              </Title>
              <Text
                style={{
                  color: '#434350',
                  fontSize: '18px',
                  fontWeight: 'semibold',
                }}
              >
                Awesome companies <br /> believe is us
              </Text>
            </div>
          </Col>
        </Row>
        <Divider style={{ margin: '40px 0', borderColor: '#434350' }} />
        <div>
          <Row>
            <Col span={12}>
              <Title level={1} style={{ color: 'white', fontSize: '50px' }}>
                Where Comfort Meets Convenience
              </Title>
            </Col>
            <Col span={12} style={{ padding: '40px 50px' }}>
              <Text
                style={{
                  color: '#434350',
                  fontSize: '20px',
                }}
                strong
              >
                Look for an agency with a proven track record of success in
                buying, selling, or renting properties. You want an agency that
                has been in the industry for a while and has experience
              </Text>
            </Col>
          </Row>
        </div>
        <div
          style={{
            position: 'absolute',
            top: '60%',
            right: '5%',
          }}
        >
          <Image
            preview={false}
            src="/comfort.avif"
            alt="Comfort"
            width={1500}
            height={700}
            style={{ borderRadius: '20px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Comfort;
