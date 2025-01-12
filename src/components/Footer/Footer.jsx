import Clock from './Clock'
import './Footer.scss';

const Footer = () => {
    return (
        <>
            <footer className='Footer'>
                <div className="Footer1">
                    <pre className="Name Roboto-Condensed font-size-4 lg:font-size-6 inline-block vertical-middle text-white cursor-default">© Λ ʙ ʜ ι נ є є τ   Ð ʜ ι κ α ℓ є  |  2024</pre>
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