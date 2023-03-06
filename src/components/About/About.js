import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <h2 className="text-center">About us</h2>
            <div className="text-center py-3 px-5 mx-5">
                <h3>We are SA Tourism Ltd</h3>
                <p className="py-3">
                In January of 2018 – almost 3 years to the day since SA tourism sold its first website – we made a decision. The company was growing so quickly that we wanted to make sure we had a team in place to help take it to the next level. Rebeca and I were moving back to Australia and now was the time to hand over the reins. We had to make sure we were leaving the company in the hands of people who truly understand SA tourism and shared our vision for the future.
                </p>
            </div>
            <div className="p-5">
            <div className="row row-cols-1 row-cols-md-3 g-4 ">
  <div className="col ">
    <div className="card img-fluid">
      <img src="https://images.unsplash.com/photo-1575986767340-5d17ae767ab0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG91cmlzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">OUR MISSION</h5>
        <p className="card-text">"SA Tourism will be the leading tourism company of the country within 2025 as manufacturer of high-tech, high quality services"</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card img-fluid">
      <img src="https://www.imf.org/-/media/Images/IMF/News/news-article-images/2020/CF-570x312-Tourism-Preto-perola-Getty-Images-iStock-1011241694.ashx?mh=304&la=en&h=304&w=556&mw=561" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">OUR VISION</h5>
        <p className="card-text">To establish an greate opportunity around the tourism field through the highest level of innovative and trevelling support which will add value to our society and act as a driven force of our humanity.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card img-fluid">
      <img src="https://www.globaltourismforum.org/wp-content/uploads/2020/02/travel-scaled.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">WHY US</h5>
        <p className="card-text">The latest venture of SA Group is SA Toursim Ltd which will fulfill the Group's devoted commitment towards the tourism sector of Bangladesh providing the complete travelling services.</p>
      </div>
    </div>
  </div>
  
    </div>
            </div>
        </div>
    );
};

export default About;