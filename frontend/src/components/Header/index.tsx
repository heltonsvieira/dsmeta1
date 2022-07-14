import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por Helton Vieira - 
                    <a href="https://www.instagram.com/heltonsvieira/?hl=pt%2C"> @heltonsvieira</a>
                </p>
            </div>
        </header>
    )

}

export default Header