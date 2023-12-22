import React, { useState } from 'react';
import styles from './Home.module.css'
import SideMenu from '../SideMenu/SideMenu';
import { MdOutlineMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

const Home = () => {

  const [activePage, setActivePage] = useState('Home Page')
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className={styles.mainOverlay}>
      <SideMenu 
        activePage={activePage} 
        setActivePage={setActivePage}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <div className={styles.mainContentWrapper}>
        <div className={styles.mainContent}>
          {activePage}
        </div>
      </div>
    </div> 
  )
}

export default Home