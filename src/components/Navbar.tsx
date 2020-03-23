import React from 'react';
import styles from 'Navbar.module.scss';
import { Icon, Menu, MenuItem } from 'semantic-ui-react';

import Search from './common/Search';

interface MenuItem {
  key: String,
  name?: String,
  color?: String,
  onClick?: Function,
  [propName: string]: any
};

interface MenuItems {
  [index: number] : MenuItem
};

export default function Navbar() {

  const _getMenuItems = () : MenuItems => {
    const menuItems : MenuItems = [
      {
        key: 'menu',
        icon: <Icon name='bars' />
      },
      {
        key: 'home-button',
        name: 'Home',
        icon: <Icon name='map marker alternate'/>
      }
    ]

    return menuItems;
  }

  return (
    <div className={styles.container}>
      <Menu inverted>
        {_getMenuItems()}
        <Search />
      </Menu>
    </div>
  );
}