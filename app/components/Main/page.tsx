'use client';
import { Button, Image, Input, Typography } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from '@/lib/redux';
import { filterSlice, selectFilter } from '@/lib/redux/slices/filter';

const { Title, Text } = Typography;
const Main = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <main style={{ padding: '60px 0', backgroundColor: '#f5f5f5' }}>
      <div
        style={{
          padding: '0 5%',
          position: 'relative',
          paddingBottom: '100px',
        }}
      >
        <Image
          width={1500}
          height={750}
          src="/head1.avif"
          alt="head image"
          preview={false}
          style={{ borderRadius: '20px' }}
        />

        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <Title style={{ fontSize: '70px' }}>
              Investing In Your Future One Home At A Time
            </Title>
          </div>
          <div
            style={{
              textAlign: 'center',
              padding: ' 0 100px',
            }}
          >
            <Text
              style={{ fontSize: '18px', fontWeight: 'bold', color: 'gray' }}
            >
              We'll help you find the key to your dream home. Experience the joy
              of homeownership. Let us make your home buying journey simple.{' '}
            </Text>
            <Button
              size="large"
              ghost
              type="primary"
              style={{
                marginTop: '30px',
                color: '#000',
                borderColor: '#000',
                fontSize: '18px',
                fontWeight: 'bold',
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            top: '88%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            width: '80%',
            borderRadius: '20px',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.2)',
          }}
        >
          <div>
            <Text>Location</Text>
            <br />
            <Input
              style={{ padding: '0 ' }}
              placeholder="Bangladesh"
              variant="borderless"
              onChange={(e) =>
                dispatch(filterSlice.actions.updateLocation(e.target.value))
              }
            />
          </div>
          <div
            style={{ width: '1px', height: '50%', backgroundColor: 'black' }}
          ></div>
          <div>
            <Text>Property Type</Text>
            <br />
            <Text style={{ color: 'gray' }}>Duplex</Text>
          </div>
          <div
            style={{ width: '1px', height: '50%', backgroundColor: 'black' }}
          ></div>
          <div>
            <Text>Budget</Text> <br />
            <Input
              style={{ padding: '0 ' }}
              placeholder="$ 12,000"
              variant="borderless"
              onChange={(e) =>
                dispatch(filterSlice.actions.updateBudged(e.target.value))
              }
            />
          </div>

          <Button
            size="large"
            type="primary"
            style={{ marginLeft: '20px', fontSize: '18px', fontWeight: 'bold' }}
          >
            Search Property
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Main;
