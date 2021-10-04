import circle from '../Assets/background - thoran.png';
import man from '../Assets/leadershipest - image.png'
const Qhse = () => {
    return (
        <div className="qhse" id='qhse'>

        <div className="qhse-banner-content">
        <span>OVERVIEW</span>
        <h1><span className="">AR logistics's</span> QHSE<br/>Leadershipest Solution</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quasi et non cumque nemo unde recusandae, similique assumenda a. Voluptate dolorum vero dignissimos voluptas, eaque libero quaerat repellat! Aperiam, repellat.</p>
        
        <div className="qhse-learn-btn">
        <a href="#">Learn more</a>
        </div></div>
        <div className="qhse-banner-imgs">
        <img  className="qhse-img-cirle" src={circle} alt="circle" />
        <img className="qhse-img-man" src={man} alt="man" />
        </div>
        </div>
      );
}
 
export default Qhse;