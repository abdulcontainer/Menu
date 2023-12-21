import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import styles from './MenuItem.module.css'
import { useState } from "react";

const MenuItem = ({index, item, activePage, setActivePage}) => {
  
  const [toggledropdown, setToggledropdown] = useState(0);

  const handleDropdown = ({index, item}) => {
    if(toggledropdown) {
      setToggledropdown(0)
    } else {
      setToggledropdown(index)
      setActivePage(item.page ? item.page : activePage)
    }
  }

  return (
    <>
      <li 
        className={`${activePage == item.page ? styles.activePageStyle : ''} ${styles.menuItem}`} 
        onClick={() => handleDropdown({index, item})}
      >
        <div className={styles.nameIconWrapper}>
          <span className={styles.bigIcon}>{item.icon}</span>
          <span>{item.name}</span>
        </div>
        {item.submenu && (
          <span className={styles.smallIcon}>
            {index == toggledropdown ? 
              <MdKeyboardArrowUp/>
              :
              <MdKeyboardArrowDown/>
            }
          </span>
        )}
      </li>
      {toggledropdown == index &&
        <ul key={index} className={styles.subMenuWrapper}>
          {item.submenu?.map((item, index) => (
            <li className={`${activePage == item.page ? styles.activePageStyle : ''} ${styles.subMenuNameIcon}`} 
              key={index} 
              onClick={() => setActivePage(item.page)}
            >
              <span className={styles.smallIcon}>{item.icon}</span>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      }
    </>
  )
}

export default MenuItem