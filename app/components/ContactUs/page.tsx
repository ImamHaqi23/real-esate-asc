'use client';
import { Button, Image, Typography } from 'antd';
import React from 'react';

const { Title, Text } = Typography;

const ContactUs = () => {
  return (
    <div style={{ backgroundColor: 'white', padding: '60px 0' }}>
      <div style={{ padding: '0 5%', textAlign: 'center' }}>
        <Image src="/sponsor.JPG" alt="sponsor" width={1500} preview={false} />
      </div>
      <div
        style={{
          padding: '0 5%',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            padding: '190px',
          }}
        >
          <Title level={2} style={{ fontSize: '40px' }}>
            Navigating Your Real Estate Journey
          </Title>
          <Text style={{ fontSize: '16px', fontWeight: 'bold', color: 'gray' }}>
            Look For An Agency With A Proven Track Record Of Success In Buying,
            Selling, Or Renting Properties. You Want An Agency That Has Been In
            The Industry For A While And Has Experience Dealing With Various
            Types Of Properties.
          </Text>
          <Button
            type="primary"
            size="large"
            style={{
              marginTop: '30px',
              width: '180px',
              color: 'white',
              backgroundColor: 'black',
              height: '50px',
              fontWeight: 'semibold',
            }}
          >
            Contact Us
          </Button>
        </div>
        <div
          style={{
            width: '50%',
            paddingLeft: '125px',
          }}
        >
          <Image
            src="/contact.avif"
            alt="contact"
            width={350}
            preview={false}
            style={{
              borderRadius: '20px',
              boxShadow: '0 30px 20px 0  rgba(0, 0, 0, 0.2)',
            }}
          />
        </div>
        <div
          style={{
            backgroundColor: 'white',
            position: 'absolute',
            bottom: '30%',
            left: '50%',
            borderRadius: '20px',
            width: '190px',
            padding: '5px 30px',
            boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.2)',
          }}
        >
          <Title
            style={{
              fontSize: '30px',
              color: 'blue',
              marginTop: '10px',
              marginBottom: '10px',
            }}
          >
            22K+
          </Title>
          <Text style={{ color: 'gray' }}>Property ready to buy and sell</Text>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
