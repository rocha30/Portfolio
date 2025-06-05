import Header from '../Header'
import Footer from '../Footer'
import BackgroundAnimation from '../../ui/BackgroundAnimation'
import ThemeSwitcher from '../../ui/Darkmodeswithc'
import './Layout.css'

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <BackgroundAnimation />
            <ThemeSwitcher />
            <Header />
            <main className="layout__main">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout