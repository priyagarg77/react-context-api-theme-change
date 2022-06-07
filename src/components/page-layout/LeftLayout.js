import React from 'react';
import Logo from './Logo';
import SideMenu from './SideMenu';
import Col from 'react-bootstrap/Col';

export default function LeftLayout({ color }) {
  let textColor = '';

  if (
    color === 'lightgray' ||
    color === 'pink' ||
    color === 'yellow' ||
    color === 'orange'
  ) {
    textColor = '#000000';
  } else if (color === 'red') {
    textColor = '#dddddd';
  }

  return (
    <Col sm={2} style={{ padding: 0, backgroundColor: color, height: '100vh' }}>
      <Logo colorText={textColor} />
      <SideMenu colorText={textColor} />
    </Col>
  );
}
