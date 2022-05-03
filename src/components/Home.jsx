import Navbar from "./Navbar"
import photo from '../img/my-photo.png'
import Typical from 'react-typical'

const Home = () => {
    return(
        <div className="home-wrapper">
            <Navbar/>
            <div className="home">
                <div className="home-title">
                    <h1>I'm <span className="home-name">Davronbek</span> Sattorov</h1>
                    <p>
                        
                        <Typical
                            steps={[
                                'HTML', 3000, 
                                'CSS', 3000,
                                'JavaScript', 3000,
                                'React', 3000,
                                'Java', 3000,
                                'Python', 3000,
                            ]}
                            loop={Infinity}
                            wrapper="b"
                        />
                    </p>

                </div>
                <img src={photo} alt="" className="photo" />
            </div>
        </div>
    )
}

export default Home;