import React, { useContext } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../App';

const colorList = [
  {
    title: 'lightgray',
    bgColor: '#eeeeef',
    textColor: '#000000',
  },
  {
    title: 'darkslategrey',
    bgColor: '#212529',
    textColor: '#ffffff',
  },
  {
    title: 'blue',
    bgColor: '#212529',
    textColor: '#ffffff',
  },
  {
    title: 'pink',
    bgColor: '#FF1493',
    textColor: '#ffffff',
  },
  {
    title: 'green',
    bgColor: '#198754',
    textColor: '#ffffff',
  },
  {
    title: 'red',
    bgColor: '#dc3545',
    textColor: '#ffffff',
  },
  {
    title: 'yellow',
    bgColor: '#ffc107',
    textColor: '#000000',
  },
  {
    title: 'orange',
    bgColor: '#FF8C00	',
    textColor: '#ffffff',
  },
];

const ColorPalette = () => {
  const { color, changeColor } = useContext(ThemeContext);

  const handleTheme = (color) => {
    changeColor(color);
  };

  return (
    <div className="color-palette">
      <ul>
        {colorList.map((color) => (
          <li
            className={`${color.title}-theme`}
            key={color.title}
            style={{ backgroundColor: color.bgColor }}
            onClick={() => handleTheme(color.title)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Color Palette</Popover.Header>
    <Popover.Body>
      <ColorPalette />
    </Popover.Body>
  </Popover>
);

const Theme = () => (
  <OverlayTrigger trigger="click" placement="left" overlay={popover}>
    <Button variant="info" className="theme-toggle">
      <FontAwesomeIcon icon={faGears} />
    </Button>
  </OverlayTrigger>
);

export default Theme;
