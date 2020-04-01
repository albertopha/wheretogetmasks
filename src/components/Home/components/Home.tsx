import React from 'react';
import styles from './Home.module.scss';
import { Dropdown } from 'semantic-ui-react';
import { getCountries } from '../../../utils/home-utils';


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Welcome to WTGM!
      </div>
      <Dropdown
        placeholder='Select Country'
        fluid
        search
        selection
        options={getCountries()}
      />
    </div>
  );
}