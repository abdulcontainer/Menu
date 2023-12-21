import styles from './SideMenu.module.css'
import { FaHome, FaInfo, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { MdGroups,MdContactSupport } from "react-icons/md";
import MenuItem from "../MenuItem/MenuItem";

const menuList =[
  { name: 'Home', icon: <FaHome/>, page: 'Home Page'}, 
  { name: 'About', icon: <FaInfo />, 
    submenu: [
      {name: 'Company', icon: <FaBuilding/>, page: 'Company Information'}, 
      {name: 'Team', icon: <MdGroups/>, page: 'Our Team'}
    ],
  }, 
  { name: 'Contact', icon: <MdContactSupport/>,
    submenu: [
      {name: 'Facebook', icon: <FaFacebook/>, page: 'Facebook Link will be there.'}, 
      {name: 'LinkdIn', icon: <FaLinkedin/>, page: 'LinkedIn Link will be there.'}
   ]}
]

const SideMenu = ({activePage, setActivePage}) => {
  return (
    <ul className={styles.asideWrapper}>
      {menuList.map((item, index) => (  
        <MenuItem 
          key={index} 
          index={index} 
          item={item}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      ))}
    </ul>
  )
}

export default SideMenu

// {menuList.map((item) => (
//   <div key={item.name}>
//     <MenuItem item = {item} setToggledropdown={setToggledropdown}/>
//     {toggledropdown == item.name ? 
//       item.submenu?.map((item, index) => (
//       <ul key={item.name}>
//         <MenuItem item = {item} setToggledropdown={setToggledropdown}/>
//       </ul>
//     ))
//   :
//   ''}
//   </div>
// ))}