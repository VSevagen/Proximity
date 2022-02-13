import React from 'react';
import FirstImg from '../../static/image1.png';
import SecondImg from '../../static/image2.png';
import ThirdImg from '../../static/image3.png';

const Carousel = () => {
    return(
        <div id="carouselExampleSlidesOnly" className="carousel slide mt-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={FirstImg} className="d-block w-100" alt="project discussion" />
                    </div>
                    <div className="carousel-item">
                    <img src={SecondImg} className="d-block w-100" alt="project discussiom" />
                    </div>
                    <div className="carousel-item">
                    <img src={ThirdImg} className="d-block w-100" alt="project discussion" />
                    </div>
                </div>
            </div>
    );
}

export default Carousel;