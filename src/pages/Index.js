import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import "./styles/index.css"
import Laptop from './images/laptop.png'
import LaptopSm from './images/laptop-sm.png'
import Social from '../components/Social/Social'
const Index = () => {
    return ( 
        <div>
            <title>Home - JM Portfolio</title>
            <Navbar page="home"/>
            <main className="container index-container global-wrapper">
                <div className="flex-container">
                    <div className="index-intro">
                        <div className="intro-wrapper">
                            <div className="laptop-sm-c">
                                <img src={LaptopSm} alt="laptop" className="laptop-sm"/>
                            </div>
                            <h1>Hi, I'm John Michael</h1>
                            <h2>
                                Web Developer
                            </h2>
                            <div className="btn-container">
                                <button className="projects">View Projects</button>
                                <button className="profile">Profile</button>
                            </div>

                            <Social/>
                        </div>
                    </div>
                    <div className="index-img">
                        <div className="img-laptop">
                            <img src={Laptop} alt="laptop" />
                        </div>
                    </div>
                </div>
                <Footer/> 
            </main>
        </div>
    );
}
export default Index;