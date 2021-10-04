import map from '../Assets/map - image.png'
import loc from '../Assets/location - icon.png'
const News = () => {
    return ( 
        <div className="news" id='news'>
        <div className="news-head">
        <p>OUR LOCATION</p>
        <h1><span className="Building">Building</span> That Have Stood</h1>
        </div>
        <div className="map-imgs">
            <img className="img-map" src={map} alt="map" />
            <div className="map-imgs-icon">
            <img className="one" src={loc} alt="location icon" />
            <div className="state africa"><span>Africa</span><p>25 Bulding</p></div>
            <img className="two" src={loc} alt="location icon" />
            <div className="state sweden"><span>Swedan</span><p>25 Bulding</p></div>
            <img className="tree"  src={loc} alt="location icon" />
            <div className="state kerala"><span>Kerala</span><p>25 Bulding</p></div>
            <img className="four" src={loc} alt="location icon" />
            <img className="five" src={loc} alt="location icon" />
            <img className="six" src={loc} alt="location icon" />
            <img className="seven"src={loc} alt="location icon" />
            </div>
        </div>

        <div className="void"></div>
        </div> 
     );
}
 
export default News;