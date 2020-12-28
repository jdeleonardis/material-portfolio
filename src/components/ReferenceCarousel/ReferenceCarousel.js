import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "./carousel.min.css"

function ReferenceCarousel(props) {

    const referenceArray = props.data.Data.recommendations;
    

    return (
        <>
        {referenceArray === null ?
            null
        :
<Carousel
            infiniteLoop
            autoPlay
            stopOnHover
            useKeyboardArrows 
            interval={10000}
            showThumbs={false}>                



            {referenceArray.map(reference => (
                  <div key={reference.id} style={{ padding: 30, color: 'white' }}>
                      {reference.recommendation}
                      <br></br>
                      <br></br>
                      {reference.giver + ', ' + reference.title + ', ' + reference.company }
                  </div>          

             ))}

        </Carousel>
        }
        
        
        </>
    )

}


export default ReferenceCarousel;


// return (
//     <Carousel
//     infiniteLoop
//     autoPlay
//     stopOnHover
//     interval={10000}>


//          <div key="slide1" style={{ padding: 30, color: 'white' }}>
//          Jay is an extremely hard working individual. He will tackle any task at hand with full effort. While working with Jay, he never shied away from any task. He would research and implement any new package needed for the project. Jay was a great team member. He made me feel like I was heard and supported throughout every step of the process. asdfasdfsdfsadf asdfasdfsdfsadf asdfsdfsadfsadfa asfdadfasfasdf asdfSDFASFDAFD
//          </div>
//      <div key="slide2" style={{ padding: 30, color: 'white' }}>
//            Text 02
//      </div>
//     </Carousel>
// );