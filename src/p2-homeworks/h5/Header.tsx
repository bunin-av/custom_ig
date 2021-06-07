import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import styles from './Header.module.scss'

function Header() {
    const [active, setActive] = useState(false)

    const documentFn = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        let menu = document.getElementsByClassName(styles.menu__wrapper)[0]
        menu.classList.toggle(styles.active)
    }

    const classSetter = `${styles.menu__wrapper} ${active ? styles.active : ''}`

    return (
        <div className={classSetter} onMouseLeave={() => setActive(false)}>
            <NavLink to={PATH.PRE_JUNIOR} className={styles.menu__elem}>Pre Junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={styles.menu__elem}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={styles.menu__elem}>Junior+</NavLink>
            <button className={styles.button} onMouseOver={() => setActive(true)}/>
        </div>
    )
}

export default Header
