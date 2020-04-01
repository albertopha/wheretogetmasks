import React from 'react';
import styles from './Navbar.module.scss';
import { Icon, Menu, MenuItem } from 'semantic-ui-react';

import Search from './Search';

interface MenuItem {
  key: string,
  name?: string,
  color?: string,
  onClick?: Function,
  [propName: string]: any
};

interface MenuItems {
  [index: number] : MenuItem
};

export default function Navbar() {
  const _getMenuItems = () => {
    const menuItems : Array<MenuItem> = [
      {
        key: 'menu',
        name: "",
        icon: <Icon name='bars' />
      },
      {
        key: 'home-button',
        name: 'Home',
        icon: <Icon name='map marker alternate'/>
      }
    ]

    return menuItems.map((mi : MenuItem)  => (
      <Menu.Item
        key={mi.key}
        icon={mi.icon}
      >
        {mi.name}
      </Menu.Item>
    ))
  }

  return (
    <div className={styles.container}>
      <Menu
        inverted
        icon
      >
        {_getMenuItems()}
        <Search />
      </Menu>
    </div>
  );
}