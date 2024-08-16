import './header.css'
import logo from '../../../assets/images/logo.jpg'

export const Header = ()=> {
    return (
        <header>
            <img src={logo} alt="logo-airbnb" />
        </header>
    )
}