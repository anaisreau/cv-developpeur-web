import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {Divider} from 'semantic-ui-react'
import './Carousel.css'

const Car=()=> {

    return (
        <div id="carousel">
            
        <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
            <p>Mes centres d'interets</p>           

        </Divider> 
       
        <p style={{ fontSize: '1.33em' }}>
            <Carousel className='car' autoPlay>
                <div>
                    <img alt="" src="https://i.pinimg.com/236x/6b/8b/30/6b8b30624a6a15aa447c93a03551265e--yogaposes-amazing-dance-photography.jpg" />
                    <p className="legend">la Danse<br />
                Titulaire de l'Examen d'Aptitude Technique en Modern Jazz je pratique cette activité depuis mes 4 ans</p>
                </div>
                <div>
                    <img alt="" src="https://i.pinimg.com/originals/cd/1f/9d/cd1f9defe7eb9f660624aa9f4dbab96a.jpg" />
                    <p className="legend">L'Equitation <br /> Titulaire du Galop 4 </p>
                </div>
                <div>
                    <img alt="" src="https://www.canyonriver-trip.com/wp-content/uploads/2015/04/Canyoning-Brian%C3%A7on-%E2%80%93-Le-Fournel-13_resized.jpg" />
                    <p className="legend">Canyoning, Escalade, Randonnée</p>
                </div>
                <div>
                    <img alt="" src="https://coachingperformances.files.wordpress.com/2013/09/rodney-smith-photography12-550x550.jpg" />
                    <p className="legend">Developpement personnel</p>
                </div>
            </Carousel>
        </p>

</div>
)

}

export default Car 