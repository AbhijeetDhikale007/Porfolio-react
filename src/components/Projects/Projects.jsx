import './Projects.scss'

const Projects = () => {
    return (
        <div className="Center ScrollAnimation" id='Projects'>
            <div className="Center2">
                <div className="PTitles">
                    <h1 className='font-size-16 md:font-size-20 text-white text-center'>Projects.</h1>
                </div>
                <div className="Projects">
                    <div className='PDiv'>
                        <div className='PImgDiv'>
                            <img src="public/assets/Background-Image.png" alt="Project 1" />
                        </div>
                        <h2 className='PH2'>Coming Soon</h2>
                        <p className='PText'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi dicta minima ducimus molestiae dolore temporibus illum ipsa consequatur ad dolor accusamus soluta, amet architecto earum laudantium dolorum, rem quam iste.</p>
                        <p className='P1'>#javascript  </p>
                        <p className='P2'>#reactjs  </p>
                        <p className='P3'>#python  </p>
                        <p className='P4'>#pascal</p>
                    </div>
                    <div className='PDiv'>
                        <div className='PImgDiv'>
                            <img src="public/assets/Background-Image.png" alt="Project 2" />
                        </div>
                        <h2 className='PH2'>Coming Soon</h2>
                        <p className='PText'></p>
                        <p className='P1'></p>
                        <p className='P2'></p>
                        <p className='P3'></p>
                        <p className='P4'></p>
                    </div>
                    <div className='PDiv'>
                        <div className='PImgDiv'>
                            <img src="public/assets/Background-Image.png" alt="Project 3" />
                        </div>
                        <h2 className='PH2'>Coming Soon</h2>
                        <p className='PText'></p>
                        <p className='P1'></p>
                        <p className='P2'></p>
                        <p className='P3'></p>
                        <p className='P4'></p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Projects