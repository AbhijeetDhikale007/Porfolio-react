import './Header.scss'

const Header = () => {
    return (
        <div className="Header flex items-center justify-between size-a" id="Header">
            <div className='flex pointer-events-none z-1 items-center select-none'>
                <img className='King pointer-events-none w-16 lg:w-23 inline-block' src='/King.png' alt="King Image" />
                <h3 className="Name Roboto-Condensed font-size-4 lg:font-size-6 inline-block vertical-middle text-white cursor-default">Λʙʜιנєєτ  Ðʜικαℓє</h3>
            </div>
            <a href="/Documents/AbhijeetPrakashDhikaleResume.pdf" target='_blank' className="Resume z-1 font-size-4">Resume</a>
        </div>
    )
}

export default Header