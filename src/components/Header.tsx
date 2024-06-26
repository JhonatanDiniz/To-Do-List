import styles from './Header.module.css'
import logo from '../assets/Logo.svg'

export function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo da aplicacao" />
            </div>            
        </header>
    )
}