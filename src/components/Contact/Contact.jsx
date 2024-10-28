import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss'

const Contact = () => {
    const form = useRef();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailed, setIsFailed] = useState(false);

    const sendEmail = (e) => {
        // e.preventDefault();

        emailjs
            .sendForm('service_r0p8u54', 'template_8un07tz', form.current, {
                publicKey: 'SJX1Gr0MkltblPuiJ',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsSuccess(true);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setIsFailed(true);
                },
            );
    };

    return (
        <div className="Right">
            <div className="ContactDiv text-white p8 ScrollAnimation" id='Contact'>
                <h1 className='text-center font-size-16'>Contact Me</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-group">
                        <div className="LabelDiv flex flex-justify-between">
                            <label id="name">Your Name</label>
                            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z" /></svg>
                        </div>
                        <input name="user_name" htmlFor="name" placeholder="What's your good name?" type="text" id="name" required />
                    </div>
                    <div className="form-group">
                        <div className="LabelDiv flex flex-justify-between">
                            <label id="email">Your Email</label>
                            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path d="M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z" /></svg>
                        </div>
                        <input name="user_email" htmlFor="email" placeholder="What's your Email?" type="email" id="email" required />
                    </div>
                    <div className="form-group">
                        <label className="MessageLabel">Your Message</label>
                        <textarea name="message" placeholder='What you want to say?' rows="5" required></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" value="Send">Send</button>
                        {isSuccess && (
                            <div className="success-message">
                                Message sent successfully!
                            </div>
                        )}
                        {isFailed && (
                            <div className="failed-message">
                                Message sent failed!
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact