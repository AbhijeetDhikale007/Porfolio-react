import './Header.scss'
import King from 'public/King.png'

const Header = () => {
    return (
        <div className="Header flex flex-items-center flex-justify-between size-a" id="Header">
            <div className='flex pointer-events-none z-1 flex-items-center select-none'>
                <img className='King pointer-events-none w-16 lg:w-23 inline-block' src={King} alt="King Image" />
                <h3 className="Name font-size-4 lg:font-size-6 inline-block vertical-middle text-white cursor-default">Λʙʜιנєєτ  Ðʜικαℓє</h3>
            </div>
            <a href="public/Documents/AbhijeetPrakashDhikaleResume.pdf" target='_blank' className="Resume z-1 font-size-4">Resume</a>
        </div>
    )
}

export default Header