'use client';
import React, { useEffect } from 'react';
import { Button, Card, Col, Row, Typography } from 'antd';
import { EnvironmentOutlined, CarOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from '@/lib/redux';
import { Property, fetchProperties } from '@/lib/redux/createAppAsyncThunk';

const { Title, Text } = Typography;

const Property = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties.data);

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  return (
    <div style={{ backgroundColor: '#F8F9FB' }}>
      <div style={{ marginTop: '400px' }}>
        <div style={{ padding: '5% 5%' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Title style={{ fontWeight: 'semibold' }}>
              Our Popular Property
            </Title>
            <Text strong style={{ color: '#66666E', fontSize: '18px' }}>
              Look For An Agency With A Proven Track Record Of Success In
              Buying, Selling, Or Renting
            </Text>
            <Text strong style={{ color: '#66666E', fontSize: '18px' }}>
              Properties. You Want An Agency That Has Been In The Industry For A
              While
            </Text>
          </div>
          <div>
            <Row gutter={[16, 16]} style={{ marginTop: '50px' }}>
              {properties.map((property: Property) => (
                <Col span={8} key={property.id}>
                  <Card
                    hoverable
                    cover={<img alt={property.name} src={property.image} />}
                    style={{ width: '450px' }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: '20px',
                      }}
                    >
                      <Text
                        style={{
                          color: '#3C6BFD',
                          fontSize: '24px',
                          fontWeight: 'bold',
                        }}
                      >
                        {property.price.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </Text>
                      <Text
                        strong
                        style={{ fontSize: '18px', fontWeight: 'semibold' }}
                      >
                        {property.name}
                      </Text>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <EnvironmentOutlined style={{ marginRight: '5px' }} />
                      <Text>
                        {property.location.street}, {property.location.city}
                      </Text>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '10px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Text style={{ marginRight: '5px' }}>
                          {property.facilities.bedroom}
                        </Text>
                        <Text style={{ marginRight: '5px' }}>bed</Text>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Text style={{ marginRight: '5px' }}>
                          {property.facilities.bathroom}
                        </Text>
                        <Text style={{ marginRight: '5px' }}>Bath</Text>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CarOutlined style={{ marginRight: '5px' }} />
                        <Text style={{ marginRight: '5px' }}>
                          {property.facilities.parkingArea}
                        </Text>
                        <Text style={{ marginRight: '5px' }}>Parking</Text>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                type="primary"
                size="large"
                style={{
                  marginTop: '50px',
                  backgroundColor: 'black',
                  fontWeight: 'bold',
                }}
              >
                Explore All Property
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
