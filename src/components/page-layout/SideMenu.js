import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Menu from './Menu';

export default function SideMenu({ colorText }) {
  const menuList = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Profile',
      link: '/profile',
    },
    {
      name: 'Messages',
      link: '/messages',
    },
    {
      name: 'Notifications',
      link: '/notifications',
    },
    {
      name: 'News',
      link: '/news',
    },
    {
      name: 'Sports',
      link: '/sports',
    },
    {
      name: 'Videos',
      link: '/videos',
    },
    {
      name: 'Explore',
      link: '/explore',
    },
    {
      name: 'More',
      link: '/more',
    },
  ];
  return (
    <ListGroup>
      {menuList.map((item) => (
        <Menu
          title={item.name}
          link={item.link}
          key={item.name}
          textColor={colorText}
        />
      ))}
    </ListGroup>
  );
}
