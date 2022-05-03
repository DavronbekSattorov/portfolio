
const Contact = () => {
    return(
        <div className="contact-wrapper">
            <div className="section-title">
                <h1>Get in Touch</h1>
            </div>
            <div className="contact">
                <div className="contact-text">
                    <h2>Let's talk about everything!</h2>
                    <p>Don't like forms? Send me an email.👋</p>
                </div>
                <div className="contact-message">
                    <div className='contact-message-up'>
                        <input type="text" name="" id="" placeholder='Your name'/>
                        <input type="text" name="" id="" placeholder='Email address'/>
                    </div>
                    <div className='contact-message-bottom'>
                        <input type="text"  placeholder='Subject'/>
                        <textarea name="" placeholder='Message'></textarea>

                    </div>

                    <button>Send Message</button>
                </div>

            </div>
            
            <div className='contact-bottom'>

            </div>
        </div>
    )
}

export default Contact;