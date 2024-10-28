import Clock from './Clock'
import './Footer.scss';

const Footer = () => {
    return (
        <>
            <footer className='Footer'>
                <div className="Footer1">
                    <h3 className="Name font-size-3 sm:font-size-4 lg:font-size-5">© Λʙʜιנєєτ  Ðʜικαℓє | 2024</h3>
                    {/* <Link to="Header" spy={true} smooth={true} duration={500}><img src="public/assets/PNG/Home.png" alt="Home" /></Link>
                    <Link to="About" spy={true} smooth={true} duration={500}><img src="public/assets/PNG/About.png" alt="About" /></Link>
                    <Link to="Education" spy={true} smooth={true} duration={500}><img src="public/assets/PNG/Education.png" alt="Education" /></Link>
                    <Link to="Skills" spy={true} smooth={true} duration={500}><img src="public/assets/PNG/Skills.png" alt="Skills" /></Link>
                    <Link to="Contact" spy={true} smooth={true} duration={500}><img src="public/assets/PNG/Contact.png" alt="Contact" /></Link> */}
                </div>
                <div className="Footer2 text-white font-size-3 sm:font-size-4 lg:font-size-5">
                    <Clock />
                </div>
            </footer>
        </>
    )
}

export default Footer;