import React from 'react';
import Col from 'react-bootstrap/Col';
import '../theme-layout/Theme.css';
import Theme from '../theme-layout/Theme';

export default function RightContext({ children, color }) {
  return (
    <Col
      sm={10}
      style={{
        textAlign: 'center',
        fontSize: '30px',
        paddingTop: '10rem',
        color: color,
      }}
    >
      <Theme />
      {children}
    </Col>
  );
}
