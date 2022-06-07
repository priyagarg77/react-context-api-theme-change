import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../App';
import './Menu.css';

export default function Menu({ title, link, textColor }) {
  const { color } = useContext(ThemeContext);

  return (
    <Link to={link}>
      <ListGroup.Item
        action
        variant="dark"
        bg="dark"
        style={{
          backgroundColor: color,
          borderColor: color,
          color: textColor,
        }}
      >
        {title}
      </ListGroup.Item>
    </Link>
  );
}
