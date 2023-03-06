import React from 'react';
import { Carousel } from 'react-bootstrap';

import Client from '../Client/Client';

import Shop from '../Shop/Shop';

const Home = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
  <img className="d-block w-100" src="https://www.topindianholidays.com/images/tours-banner.jpg" alt=""/>
<Carousel.Caption>
    <h3>Rajasthan Heritage, India</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className="d-block w-100" src="https://www.puredestinations.co.uk/wp-content/uploads/2017/09/header-Best-Places-To-Visit-In-Thailand-Thailand-Holidays-Packages--1600x500.jpg" alt=""/>
<Carousel.Caption >
    <h3>Phi Phi Islands, Thailand</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className="d-block w-100" src="https://di5fgdew4nptq.cloudfront.net/api2/media/images/50a91471-0db6-ea11-80da-f8bc124783a3" alt=""/>
<Carousel.Caption>
    <h3>Dubai</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
           
            <div>
                
                <Shop></Shop>
            </div>
            <div>
            <h3 className="ps-5">Our Tours Partnar</h3>
                <Client></Client>
            </div>
            <div className="pb-5 text-center" >
                <h3 className="mb-5">Documentary nature of Beautiness</h3>
            <div className="d-lg-flex justify-content-evenly pb-5 text-center">
            <div className="m-3">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/rDYdeq3JW_E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
               <h4>Raw Beauty of Bangladesh</h4>
                </div>
            <div className="m-3">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4iDx-ctQkiQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <h4>Raw Beauty of India</h4>
                </div>
            </div>
            <div className="d-lg-flex justify-content-evenly pb-5 text-center">
            <div className="m-3">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/EgeqKqwebZI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <h4>Raw Beauty of Nepal</h4>
                </div>
            <div className="m-3">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/GiJC-7Gl1cA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <h4>Raw Beauty of Maldives</h4>
                </div>

            </div>
            </div>

            

        </div>

    );
};

export default Home;
