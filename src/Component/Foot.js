import logo from '../Assets/AR - logo.png';
import facebook from '../Assets/Icon awesome-facebook-f.png'
import twiter from '../Assets/Icon awesome-twitter.png'
import youtube from '../Assets/Icon awesome-youtube.png'
const Foot = () => {
    return (
        <div className="foot">
        <div className="linkfoot">
        <img src={logo} style={{width:'60px'}} />
        <p className='foot-p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure voluptatibus, sequi ratione sapiente beatae ipsa eveniet repudiandae ullam et porro! Repellendus sunt animi eligendi optio neque illum repudiandae culpa sint.</p>
        <div className="company-links">
        <h4>Company</h4><br />
        <a href="#home">Home</a><br />
        <a href="#services">Service</a><br />
        <a href="#qhse">QHSE</a><br />
        <a href="#news">News</a><br />
        <a href="#contact">Contact Us</a>
        </div>
        <div className="team-links">
        <h4>Team</h4><br />
        <a href="">Help Center</a><br />
        <a href="">Service Status</a><br />
        <a href="">Careers</a><br />
        </div>
        <div className="resources-links">
        <h4>Resources</h4><br />
        <p className='f-p'>Lorem ipsum dolor, sit amet consectetur  </p><br />
        <div className="social-f"><img src={facebook} alt="facebook" /></div>
        <div className="social-t"><img src={twiter} alt="twiter" /></div>
        <div className="social-y"><img src={youtube} alt="youtube" /></div>
        
        
        
        
        </div>

        
        </div>
        <div>
            <p className='footie'>2021 AR LOGISTICS.All rights reserved.Designed by <span><b>www.arshal.in</b></span></p>
        </div>

        </div>
        
      );
}
 
export default Foot;