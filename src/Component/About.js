import circle from '../Assets/background - thoran.png';
import man from '../Assets/more - us - image.png';
const About = () => {
    return ( 
        <div className="about" id='about'>
        <div className="about-banner-imgs">
        <img  className="about-img-cirle" src={circle} alt="crain" />
        <img className="about-img-man" src={man} alt="man" />
        
        </div>
        <div className="about-banner-content">
       <span>ABOUT US</span>
        <h1><span>Know</span> More Us</h1>
        <p className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quasi et non cumque nemo unde recusandae, similique assumenda a. Voluptate dolorum vero dignissimos voluptas, eaque libero quaerat repellat! Aperiam, repellat.</p>
        
        <div className="about-learn-btn">
        <a href="#">Learn more</a>
        </div>
        </div>
        </div> 
     );
}
 
export default About;