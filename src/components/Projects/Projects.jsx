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
                            <a target='_blank' href="https://abhijeetdhikale007-react.vercel.app">
                                <img src="Projects/P1.png" alt="Project 1" />
                            </a>
                        </div>
                        <h2 className='PH2'>React Portfolio</h2>
                        <p className='PText'>Developed a personal portfolio website using React showcasing skills in web development. It includes header, hero, navbar, profile, education, skills, contact, footer and some 3D interactive objects by using react- three-fiber.</p>
                        <div class='flex flex-wrap mt-5 gap-2'>
                            <p className='P1'>#React</p>
                            <p className='P2'>#Unocss</p>
                            <p className='P3'>#Threejs</p>
                        </div>
                    </div>
                    <div className='PDiv'>
                        <div className='PImgDiv'>
                            <a target='_blank' href="https://abhijeetdhikale007.vercel.app">
                                <img src="Projects/P2.png" alt="Project 2" />
                            </a>
                        </div>
                        <h2 className='PH2'>Svelte Portfolio</h2>
                        <p className='PText'>Developed a more advanced personal portfolio website using Svelte 5, Unocss showcasing skills in web development. It includes header, home, skills, projects, education, resume.</p>
                        <div class='flex flex-wrap mt-5 gap-2'>
                            <p className='P1'>#Svelte</p>
                            <p className='P2'>#Unocss</p>
                            <p className='P3'>#Tiltjs</p>
                        </div>
                    </div>
                    <div className='PDiv'>
                        <div className='PImgDiv'>
                            <a target='_blank' href="https://e-katta.vercel.app">
                                <img src="Projects/P3.png" alt="Project 3" />
                            </a>
                        </div>
                        <h2 className='PH2'>Ekatta Website</h2>
                        <p className='PText'>Developed a website for an online cyber cafe (EKatta) using Sveltekit 5, Unocss showcasing all the services provided. It includes header, home, services, contact us, about us and footer.</p>
                        <div class='flex flex-wrap mt-5 gap-2'>
                            <p className='P1'>#Sveltekit</p>
                            <p className='P2'>#Unocss</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Projects