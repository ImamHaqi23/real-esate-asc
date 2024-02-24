'use client';
import { Menu, Button } from 'antd';
import React from 'react';
import Link from 'next/link';
import { Image } from 'antd';

const Navbar = () => {
  return (
    <Menu
      mode="horizontal"
      style={{ fontSize: '20px', fontWeight: 'bold', padding: '10px 5%' }}
    >
      <Menu.Item key="logo">
        <Image src="/Real.jpg" width={150} height={40} alt="Logo" />
      </Menu.Item>
      <Menu.Item key="home" style={{ marginLeft: '40px' }}>
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="rent" style={{ marginLeft: '40px' }}>
        <Link href="/rent">Rent</Link>
      </Menu.Item>
      <Menu.Item key="sell" style={{ marginLeft: '40px' }}>
        <Link href="/sell">Sell</Link>
      </Menu.Item>
      <Menu.Item
        key="about"
        style={{
          marginRight: 'auto',
          marginLeft: '40px',
        }}
      >
        <Link href="/about">About</Link>
      </Menu.Item>

      <Menu.Item key="login">
        <Link
          href="/login"
          style={{ fontSize: '16px', fontWeight: 'semibold' }}
        >
          Login
        </Link>
      </Menu.Item>
      <Menu.Item key="create-account">
        <Button
          type="primary"
          style={{
            backgroundColor: 'black',
            color: 'white',
            fontSize: '16px',
            fontWeight: 'semibold',
            padding: '20px 10px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Create Account
        </Button>
      </Menu.Item>
    </Menu>
  );
};
export default Navbar;
