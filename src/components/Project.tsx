import netflixIMG from '../assets/image/netflix.png'
import getMyShoeIMG from '../assets/image/getmyshoe.png'
import usermanagement from '../assets/image/usermanagement.png'
import olx from '../assets/image/olx.png'
const Project = () => {
    return (
        <section className="portfolio" id="portfolio">
            <h2 className="heading">Latest <span>Project</span></h2>

            <div className="portfolio-container">
                <div className="portfolio-box">
                    <img src="images/portfolio1.jpg" alt="" width="300px" height="300px"/>
                        <div className="portfolio-layer">
                            <h4>GETCHAT - SOCIAL MEDIA APPLICATION </h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, consequuntur?</p>
                            <a href="https://github.com/SreeragBhaskarK/GetChat">
                                <i className="bx bx-link-external"></i></a>
                        </div>
                </div>

                <div className="portfolio-box">
                    <img src={getMyShoeIMG} alt="" width="300px" height="300px"/>
                        <div className="portfolio-layer">
                            <h4>GETMYSHOE - ECOMMERCE APPLICATION</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, consequuntur?</p>
                            <a href="https://getmyshoe.live">
                                <i className="bx bx-link-external"></i></a>
                        </div>
                </div>

                <div className="portfolio-box">
                    <img src={usermanagement} alt="" width="300px" height="300px"/>
                        <div className="portfolio-layer">
                            <h4>USER MANAGEMENT</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, consequuntur?</p>
                            <a href="https://github.com/SreeragBhaskarK/UserManagement">
                                <i className="bx bx-link-external"></i></a>
                        </div>
                </div>

                <div className="portfolio-box">
                    <img src={olx} alt="" width="300px" height="300px"/>
                        <div className="portfolio-layer">
                            <h4>OLX CLONE</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, consequuntur?</p>
                            <a href="https://github.com/SreeragBhaskarK/OLX">
                                <i className="bx bx-link-external"></i></a>
                        </div>
                </div>

                <div className="portfolio-box">
                    <img src={netflixIMG} alt="" width="300px" height="300px"/>
                        <div className="portfolio-layer">
                            <h4>NETFLIX CLONE</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, consequuntur?</p>
                            <a href="https://github.com/SreeragBhaskarK/Netflix">
                                <i className="bx bx-link-external"></i></a>
                        </div>
                </div>

                <div className="portfolio-box">
                    <img src="images/portfolio6.jpg" alt="" width="300px" height="300px"/>
                        <div className="portfolio-layer">
                            <h4>TODO LIST</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, consequuntur?
                            </p>
                            <a href="https://github.com/SreeragBhaskarK/ToDoList">
                                <i className="bx bx-link-external"></i></a>
                        </div>
                </div>
            </div>
        </section>


    )
}

export default Project