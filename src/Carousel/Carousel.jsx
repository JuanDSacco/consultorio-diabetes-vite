import React from 'react'
import '../styles/styles.scss'
import Img1 from '../assets/imgCarousel/img1.jpg'
import Img2 from '../assets/imgCarousel/img2.jpg'
import Img3 from '../assets/imgCarousel/img3.jpg'
import Img4 from '../assets/imgCarousel/img4.jpg'

const Carousel = () => {
    return (

    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div className='divImgCarousel' class="carousel-item active">
                <img className='imgCarousel' src={Img1} class="d-block w-100" alt="Imagen DBT"/>
            </div>
            <div className='divImgCarousel' class="carousel-item">
                <img className='imgCarousel' src={Img2} class="d-block w-100" alt="Imagen DBT"/>
            </div>
            <div className='divImgCarousel' class="carousel-item">
                <img className='imgCarousel' src={Img3} class="d-block w-100" alt="Imagen DBT"/>
            </div>
            <div className='divImgCarousel' class="carousel-item">
                <img className='imgCarousel' src={Img4} class="d-block w-100" alt="Imagen DBT"/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </button>
    </div>

    )
}

export default Carousel
