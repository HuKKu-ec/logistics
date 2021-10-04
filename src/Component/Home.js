import crain from "../Assets/spot - vector.png"
import man from "../Assets/spotlight - image - 01.png"
const Home = () => {
    return (
    <div className="home" id='home'>
    <div className="home-banner-content">
    <div classNameh="home-heading">
    <h1>Welcome to<br/><span>AR logistics</span></h1>
    </div>
    
    <p className="home">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quasi et non cumque nemo unde recusandae</p>
    
    <div className="home-learn-btn">
        <a href="#">Learn more</a>
    </div>
    </div>

    <div className="home-banner-imgs">
    <img  className="img-crain" src={crain} alt="crain" />
    <img className="img-man" src={man} alt="man" />
    </div>
    </div> 
    );
}
 
export default Home;