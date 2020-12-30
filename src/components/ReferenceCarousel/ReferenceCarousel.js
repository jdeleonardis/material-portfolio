import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "./carousel.min.css"
import "./carousel.css"

function ReferenceCarousel(props) {

    //randomize references
    const referenceArray = props.data.Data.recommendations;

    function shuffleArray(referenceArray) {        
        for (let i = referenceArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [referenceArray[i], referenceArray[j]] = [referenceArray[j], referenceArray[i]];
        }
    }

    shuffleArray(referenceArray);
    

    return (
        <>
        {/* on load, there is nothing in the array, and a blank slide will appear */}
        {referenceArray === null ?
            null
        :
        <Carousel
            infiniteLoop
            autoPlay
            stopOnHover
            useKeyboardArrows 
            interval={10000}
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            showIndicators={false}>

            {referenceArray.map(reference => (
                  <p key={reference.id} style={{color: 'white'}}>
                      {reference.recommendation}
                      <br></br>
                      <br></br>
                      {reference.giver + ', ' + reference.title + ', ' + reference.company }
                  </p>          

             ))}

        </Carousel>
        }
        
        
        </>
    )

}


export default ReferenceCarousel;
