import './Navbar.scss'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <>
      <div className="Center pointer-events-none">
        <nav className="Navbar pointer-events-auto fixed flex">
          <Link className="tooltip" data-title="Home" to="Header" spy={true} smooth={true} offset={-20} duration={100}><img className='w-8' src="/assets/PNG/Home.png" alt="Home" /></Link>
          <Link className="tooltip" data-title="About" to="About" spy={true} smooth={true} duration={100}><img className='w-8' src="/assets/PNG/About.png" alt="About" /></Link>
          <Link className="tooltip" data-title="Education" to="Education" spy={true} smooth={true} duration={100}><img className='w-8' src="/assets/PNG/Education.png" alt="Education" /></Link>
          <Link className="tooltip" data-title="Skills" to="Skills" spy={true} smooth={true} duration={100}><img className='w-8' src="/assets/PNG/Skills.png" alt="Skills" /></Link>
          <Link className="tooltip" data-title="Contact" to="Contact" spy={true} smooth={true} duration={100}><img className='w-8' src="/assets/PNG/Contact.png" alt="Contact" /></Link>
        </nav>
      </div>
    </>
  )
}

export default Navbar