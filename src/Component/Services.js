import log1 from '../Assets/Logging - image.png';
import log2 from '../Assets/industrial - image.png';
import log3 from '../Assets/services - image.png';
import log4 from '../Assets/Measurment - image.png'


const Service = () => {
    const service=[{img:log3,heading:"fasfdsfdfadfasfa",discr:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem sequi provident "},
    {img:log4,heading:"fasfdsfdfadfasfa",discr:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem sequi provident "},
    {img:log2,heading:"fasfdsfdfadfasfa",discr:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem sequi provident "},
    {img:log1,heading:"fasfdsfdfadfasfa",discr:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem sequi provident "}]
    return (  
        <div className="services" id='services'>
        <div className="services-head">
        <span>OUR SERVICES</span>
        <h1><span className="best">Best</span> Solution For you</h1>
        <p className="services">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem sequi provident 
        nam? Molestias recusandae, provident culpa iste ipsa a laboriosam dolor temporibu</p>
        </div>
        <div className="services-provided">
        {service.map((value)=>{

            return <div className="service">
            
            <img  src={value.img}/>
            <div className="service-content">
            <h1>{value.heading}</h1>
            <p>{value.discr}</p></div>
        </div>
        })}

        </div>
        <div className="btn-class">
        <div className="about-learn-btn">
        <a href="#">Learn more</a>
        </div>
        </div>

        </div>
    );
}
 
export default Service;