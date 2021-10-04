import bgbox from '../Assets/background - work for us.png'
import upload from "../Assets/Icon feather-upload.png"
const Contact = () => {
    return (
        <div style={{ position: "relative", height: "400px", paddingLeft: "" }} className="Forus" id='contact'>
            <img style={{ position: "absolute", width: "100%", height: "100%" }} className='bgbox' src={bgbox} />
            <div style={{ position: "absolute", width: "100%", height: "100%" }} className="news-content">
                <div className="forus-head">
                    <h1><span>Want </span>to work for us ?</h1>
                    <p>If you are ready to join AR logistic's family then please check the list of current vacancies <br />with our regular updates.A cover letter is encouraged along with your cv</p>
                </div>
                <div className="form">
                    <form>
                        
                            <input type="file" id="file" aria-label="File browser example"/>
                        
                        <img style={{ position: "absolute" }} className='upload-img' src={upload} />
                        <input type="submit" value="send" />
                    </form>


                </div>
            </div>
            <div className='void-1'></div>
        </div>);
}

export default Contact;