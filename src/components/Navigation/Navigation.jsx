import { NavLink } from 'react-router-dom'
import s from "./Navigation.module.css"
import clsx from 'clsx'
const Navigation = () => {

const customStyle = ({ isActive }) => clsx( s.navItem, isActive && s.active );
return (
    <nav className={s.navList}>
      <NavLink className={customStyle} to="/">Home</NavLink> 
      <NavLink className={customStyle} to="/movies">Movies</NavLink> 
    </nav>
)}

export default Navigation;
