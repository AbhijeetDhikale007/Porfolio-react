import './Education.scss'

const Education = () => {
    return (
        <div className="Education flex-wrap py-10" id='Education'>
            <h2 className="EduDetail">EDUCATION DETAILS....</h2>
            <h1 className="EduTitle">Education.</h1>
            <div className='flex mt-30 flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-10'>
                <div className='EduDiv'>
                    <img src="/assets/Education/New-English-School.png" alt="School Logo" />
                    <h3 className='EduName'>New English School,<br />Adgaon, Nashik</h3>
                    <p>(2018)</p>
                    <h2>10th</h2>
                    <h3 className='Field'>SSC</h3>
                    <h3 className='Marks'>Percentage: 65.60%</h3>
                </div>
                <div className='EduDiv'>
                    <img src="/assets/Education/NDMVP-ITI.png" alt="College Logo" />
                    <h3 className='EduName'>NDMVP Samaj's ITI College,<br />Nashik</h3>
                    <p>(2019-2020)</p>
                    <h2>I T I</h2>
                    <h3 className='Field'>Electrical</h3>
                    <h3 className='Marks'>Percentage: 68.29%</h3>
                </div>
                <div className='EduDiv'>
                    <img className='METLogo' src="/assets/Education/MET-College.png" alt="College Logo" />
                    <h3 className='EduName'>MET Bhujbal Knowledge City,<br />Adgaon, Nashik</h3>
                    <p>(2021-2023)</p>
                    <h2>Diploma</h2>
                    <h3 className='Field'>Electrical Engineering</h3>
                    <h3 className='Marks'>Percentage: 69.83%</h3>
                </div>
                <div className='EduDiv'>
                    <img className='METLogo' src="/assets/Education/YCMOU.png" alt="College Logo" />
                    <h3 className='EduName'>YCMOU,<br />Nashik</h3>
                    <p>(2023-Present)</p>
                    <h2>Bachaelor Degree</h2>
                    <h3 className='Field'>BCA</h3>
                    <h3 className='Marks'>Pursuing</h3>
                </div>
            </div>
        </div>
    )
}

export default Education