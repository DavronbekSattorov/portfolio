import dots from '../img/dots.png';
import user from '../img/my-photo.png';
import code from '../img/code.png';
import code1 from '../img/coding.png';
import code2 from '../img/coding2.png';
import code3 from '../img/coding3.png';

const About = () => {
    return(
        <div className="about-wrapper">
            <div className="section-title">

                <h1>About me</h1>
            </div>
            <div className="about">
                <div className='about-me-text-wrapper'>
                    <div className='about-me-text-img'>
                        <img src={user} alt="" />
                    </div>
                    <div className='about-me-text'>
                        <p>
                           <span className='about-me-text-marked'>I am </span> independent, team player and confident front-end developer
                        specialized in JavaScript and React. Have experience working with Redux, ContextAPI, Material UI, Bootstrap, and other Front-End tools, frameworks, and libraries.

                        </p>
                        <div className='about-skills'>
                            <div className='about-skill'>
                                <p className='about-skill-title'>Front-end</p>
                                <div className='about-skill-list'>
                                    <p>HTML</p>
                                    <p>CSS</p>
                                    <p>Javascript</p>
                                    <p>React</p>
                                    <p>Bootstrap | MaterialUI</p>
                                    <p>REST API | JSON</p>
                                    
                                </div>
                            </div>
                            <div className='about-skill'>
                                <p className='about-skill-title'>Others</p>
                                <div className='about-skill-list'>
                                    <p>Java</p>
                                    <p>Python</p>
                                    <p>MySQL</p>
                                    <p>GitHub | Git</p>
                                </div>
                            </div>
                            <div className='about-skill'>
                                <p className='about-skill-title'>Hobbies</p>
                                <div className='about-skill-list'>
                                    <p>Football</p>
                                    <p>Reading</p>
                                    <p>Talking</p>
                                    <p>Travelling</p>
                                </div>
                            </div>

                        </div>
                   
                    </div>
                </div>

                

                <div className='about-Ihavedone-wrapper'>
                    <div className='about-Ihavedone done-blue'>
                        <img src={code1} alt="" />
                        <p>
                        <span className='quote'>''</span>
                        Implemented mobile-first design using different CSS techniques and JavaScript libraries
                        <span className='quote'>''</span>
                        </p>
                    </div>
                    <div className='about-Ihavedone done-yellow'>
                    <img src={code2} alt="" />
                    <p>
                        <span className='quote'>''</span>
                        Translated design team’s UX mockups from Figma into responsive, interactive UI components.
                        <span className='quote'>''</span>
                        </p>
                    </div>
                    <div className='about-Ihavedone done-red'>
                    <img src={code3} alt="" />
                    <p>
                        <span className='quote'>''</span>
                        Developed and implemented highly responsive components using React and Redux.
                        <span className='quote'>''</span>
                        </p>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default About;