import React from 'react'
import Carousel from '../../Carousel/Carousel'
import TextoIndex from '../../TextoIndex/TextoIndex'

const Index = () => {
    return (
        <div className='divIndexContainer'>
            <div className='divCarousel'>
                <Carousel/>
            </div>
            <div className='divTextoIndex'>
                <TextoIndex/>
            </div>
        </div>
    )
}

export default Index
