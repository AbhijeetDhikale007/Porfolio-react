import './Experience.scss'

const Experiences = [
    { CertificateUrl: 'Documents/Internship - Calanjiyam Consultancy.pdf', imgUrl: 'assets/Education/Calanjiyam.png', imgAlt: 'Calanjiyam Consultancies and Technologies', Title: 'Full stack Web application Development Intern', Company: 'Calanjiyam Consultancies and Technologies', Location: 'Erode, Tamil Nadu - 638455', Date: '3 Jan 2025 - 5 Mar 2025', Duration: '8 Weeks', Details: 'An internship on Full stack Web application Development using HTML, CSS, JavaScript, jQuery, Ajax, PHP, and MySQL at Calanjiyam Consultancies and Technologies (8 Weeks). The internship was centred around the following project ‘E - learning platform’.' },
    // { CertificateUrl: 'Documents/ITI-ConsolidatedMarksheet_R180827051938.pdf', imgUrl: 'assets/Images/MVP.png', imgAlt: 'MVP', Title: 'Industrial Training Institute', Company: `NDMVP Samaj's ITI`, Location: 'Nashik, Maharashtra', Date: 'Aug 2018 - May 2021', Duration: '2 Year', Details: '' },
]

const Experience = () => {
    return (
        <div className='Experience ScrollAnimation' id='Experience'>
            <h1 className='font-size-16 text-white text-left w-88%'>Experience.</h1>
            <div className='flex flex-row justify-center gap-10 w-100%'>
            {Experiences.map((experience, index) => (
                <div className='ExpCard' key={index}>
                    <img src={experience.imgUrl} alt={experience.imgAlt} />
                    <h3>{experience.Title}</h3>
                    <hr />
                    <p>{experience.Company}</p>
                    <hr />
                    <p>{experience.Location}</p>
                    <hr />
                    <p>{experience.Date}</p>
                    <hr />
                    <p>{experience.Duration}</p>
                    <hr />
                    <p className='text-3.6'>{experience.Details}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Experience