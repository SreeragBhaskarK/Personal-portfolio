
import { SiLeetcode } from 'react-icons/si'
export const Home = () => {
    return (
        <>

            <section className="home" id="home">
                <div className="home-content">
                    <h1>Hi, I'm <span>Sreerag Bhaskar K</span></h1>
                    <div className="text-animate">
                        <h3>MERN FULL STACK DEVELOPER</h3>
                    </div>
                    <p>
                        Passionate Full Stack MERN developer with a strong focus on Node.js and React.js development. Gained
                        extensive knowledge in building robust and scalable applications. Committed to delivering high-quality code and
                        continuously learning new technologie.
                    </p>

                    <div className="btn-box">
                        <a href="#contact" className="btn">Hire Me</a>
                        <a href="https://drive.google.com/u/0/uc?id=1N2tS3qJfAM7wBj7_3La0eXkXCDWL9vmy&export=download" className="btn">Download CV</a>
                    </div>
                    <div className="home-sci">
                        <a target='_blank' href="https://github.com/SreeragBhaskarK"><i className="bx bxl-github"></i></a>
                        <a target='_blank' href="https://www.linkedin.com/in/sreerag-bhaskar-k-164066204"><i className="bx bxl-linkedin"></i></a>
                        <a target='_blank' href="https://leetcode.com/sreeragvk020"><SiLeetcode /></a>
                    </div>
                </div>



                <div className="home-imgHover">
                </div>
            </section>
        </>
    )
}

export default Home