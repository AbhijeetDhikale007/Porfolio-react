import './Hero.scss'
import TypingAnimation from '../TypingAnimation/TypingAnimation'

const Hero = () => {
    return (
        <div className='Hero z-1 pointer-events-none'>
            <h1 className='H1 text-white'>Welcome,</h1>
            <h1 className='H2'>I'm Abhijeet Dhikale</h1>
            <TypingAnimation />
            <div className="svgdiv flex content-center">
                <div className="SVG flex flex-items-center flex-justify-between">
                    <a className='tooltip pointer-events-auto' data-title='Instagram' target='_blank' href="https://www.instagram.com/abhijeetdhikale007"><img className='lg:w-8 w-10' src="/assets/Skills/Instagram2.svg" alt="Instagram" /></a>
                    <a className='tooltip pointer-events-auto' data-title='LinkedIn' target='_blank' href="https://www.linkedin.com/in/abhijeet-dhikale-188016326"><img className='lg:w-8 w-10' src="/assets/Skills/LinkedIn2.svg" alt="LinkedIn" /></a>
                    <a className='tooltip pointer-events-auto' data-title='Twitter' target='_blank' href="https://x.com/abhijeetdhikale007"><img className='lg:w-8 w-10' src="/assets/Skills/Twitter2.svg" alt="Twitter" /></a>
                    <a className='tooltip pointer-events-auto' data-title='GitHub' target='_blank' href="https://github.com/AbhijeetDhikale007"><img className='lg:w-8 w-10' src="/assets/Skills/Github2.svg" alt="GitHub" /></a>
                </div>
            </div>
        </div>
    )
}

export default Hero