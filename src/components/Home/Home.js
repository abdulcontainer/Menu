import React, { useState } from 'react';
import styles from './Home.module.css'
import SideMenu from '../SideMenu/SideMenu';

const Home = () => {

  const [activePage, setActivePage] = useState('Home Page')
  
  return (
    <div className={styles.mainOverlay}>
      <SideMenu activePage={activePage} setActivePage={setActivePage}/>
      <div className={styles.mainContentWrapper}>
        <div className={styles.mainContent}>
          {activePage}
        </div>
      </div>
    </div> 
  )
}

export default Home