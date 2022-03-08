import style from './NavBar.module.css';

// let style = {
//     'nav': 'NavBar_nav__Az7US',
//     'item': 'NavBar_item__KwENE'
// }

const NavBar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <a href='#1'>Profile</a>
            </div>
            <div className={style.item}>
                <a href='#2'>Message</a>
            </div>
            <div className={style.item}>
                <a href='#3'>News</a>
            </div>
            <div className={style.item}>
                <a href='#4'>Music</a>
            </div>
            <div className={style.item}>
                <a href='#5'>Settings</a>
            </div>
        </nav>)
}

export default NavBar