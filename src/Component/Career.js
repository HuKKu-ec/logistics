import { useState } from 'react';
import star from '../Assets/Icon awesome-star.png'
import per1 from '../Assets/person 1.jpg';
import per2 from '../Assets/person 2.jpg';
import per3 from '../Assets/person 3.jpg';
import circle from '../Assets/background - thoran.png';
const Career = () => {
    const message = [{
        pic: per1, mes: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur ipsam vitae commodi tenetur quaerat ",
        name: "Angela", role: "JOBI Company"
    },{
        pic: per2, mes: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur ipsam vitae commodi tenetur quaerat",
        name: "Ashwathy", role: "JOBI Company"
    }, {
        pic: per3, mes: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur ipsam vitae commodi tenetur quaerat ",
        name: "CEO of Babli LTD", role: "Mahi LTD"
    }]
    return (
        <div>
            <div className="career-head" id='career'>
                <p>TESTIMONIAL</p>
                <h1><span className="What">What</span> People Say About Us</h1>
            </div>
            <img  className="career-img-cirle" src={circle} alt="circle" />
            <div className="opinions">
                {message.map((value) => {         
              return<div className="opi-full-box">
                        <img src={value.pic} />
                        <div className="opi-box">
                            <p className='mes'>{value.mes}</p>
                            <div className='bottum'>
                            <h4>{value.name}</h4>
                            <p className='role'>{value.role}</p></div>
                            <img className='star' src={star} alt="star" />
                            <img className='star' src={star} alt="star" />
                            <img className='star' src={star} alt="star" />
                            <img className='star' src={star} alt="star" />
                            <img className='star' src={star} alt="star" />
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Career;