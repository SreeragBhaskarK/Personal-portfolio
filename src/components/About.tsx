
import aboutIMG from '../assets/image/aboutIMG.jpg'

export const About = () => {
    return (
        <>
            <section className="about" id="about">
                <h2 className="heading">About <span>Me</span></h2>

                <div className="about-img">
                    <img className='about-img' src={aboutIMG} alt="about" />
                    <span className="circle-spin"></span>
                </div>

                <div className="about-content">
                    <h3>MERN FULL STACK DEVELOPER!</h3>
                    <p>
                        Passionate Full Stack MERN developer with a strong focus on Node.js and React.js development. Gained
                        extensive knowledge in building robust and scalable applications. Committed to delivering high-quality code and
                        continuously learning new technologie
                    </p>

                    <div className="btn-box btns">
                        <a href="#" className="btn">Read More</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About