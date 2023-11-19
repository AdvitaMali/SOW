import React from 'react';
import Card from './Card';
import Carousel from './Carousel';

export default function project() {
    const isMobile = navigator.userAgentData.mobile;
    const proj = [
        {
            contain: 'Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and Arabian architecture.',
            image: require('../images/arabian-ranches.jpg'),
            footername: 'Arabian Ranches'
        },
        {
            contain: 'Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and Arabian architecture.',
            image: require('../images/arabian-ranches-ii.jpg'),
            footername: 'Arabian Ranches II '
        },
        {
            contain: 'The Centre of Now. The most prestigious square kilometre in the world. Downtown Dubai is no stranger to such accolades, and yet it’s hard to overstate the prominence of this community.',
            image: require('../images/downtown-dubai.jpg'),
            footername: 'Downtown Dubai'
        },
        {
            contain: 'Sustainably designed, Dubai Hills Estate is a first of its kind destination. This masterfully-planned 2,700-acre multi-purpose development will form an integral part of the Mohammed Bin Rashid City.',
            image: require('../images/dubai-hills-estate.jpg'),
            footername: 'Dubai Hills Estate'
        },
        {
            contain: 'Dubai Marina is one of the world’s largest, most meticulously planned waterfront developments and offers the exhilaration and vibrancy of a chic, urban lifestyle together with all the advantages of living on the water.',
            image: require('../images/dubai-marina.png'),
            footername: 'Dubai Marina'
        },
        {
            contain: 'Launched in 2003, Emirates Living is a modern lifestyle community focused on outdoor leisure. Emirates Living offers a serene nature-filled sanctuary, with 8,659 premium villas nestled within 52.2 million square feet of lush greenery.',
            image: require('../images/emirates-living.jpg'),
            footername: 'Emirates Living '
        },
    ];
    const renderTitle = (title) => {
        return (
            <>
                <br />
                <div class="row">
                    <h1 class="display-2 text-center">{title}</h1>
                </div>
            </>
        );
    };
    return (
        <div className="container ">
            {renderTitle('COMMUNITIES WE MANAGE')}
            <div className="row">
                {proj.map((project) => (
                    <div className="col-12 col-md-4 my-2">
                        <Card
                            contain={project.contain}
                            image={project.image}
                            footername={project.footername}
                        />
                    </div>
                ))}
            </div>

            <div className="corouselBlock">
                {renderTitle('OUR SERVICES')}
                <div className="row">
                    <Carousel showPerSlide={isMobile ? 1 : 3}>
                        {proj.map((project) => (
                            <div className="col-12 my-2">
                                <img class="card-img-top img-fluid" src={project.image} alt="" />
                                <div class="text">
                                    <h6>{project.footername}</h6>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
