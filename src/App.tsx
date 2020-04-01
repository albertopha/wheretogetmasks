import React from 'react';
import styles from 'App.module.scss';
import { Route, Switch } from 'react-router';
import Navbar from './components/common/Navbar';
import MapWrapper from './components/Map/MapWrapper';
import HomeWrapper from './components/Home/HomeWrapper';


export default function App() {
  return (
    <div className={styles.container}>
      <div className={styles.topnavbar}>
        <Navbar />
      </div>
      <Switch>
        {/* <Route path='/stats' component={Stats}/> */}
        <Route exact path={'/setup:id'} component={MapWrapper} />
        <Route path={['/', '/home']} component={HomeWrapper} />
      </Switch>
    </div>
  );
}