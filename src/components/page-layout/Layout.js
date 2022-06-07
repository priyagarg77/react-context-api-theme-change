import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LeftLayout from './LeftLayout';
import RightContent from './RightContent';
import { ThemeContext } from '../../App';
import '../theme-layout/Theme.css';

export default function Layout({ children }) {
  const { color } = useContext(ThemeContext);
  return (
    <Container fluid>
      <Row>
        <LeftLayout color={color} />
        <RightContent children={children} color={color} />
      </Row>
    </Container>
  );
}
