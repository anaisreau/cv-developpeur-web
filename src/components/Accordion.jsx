import React, { useState} from 'react'
import { Icon, Image,  Grid, GridColumn  } from 'semantic-ui-react'
import './Accordion.css'

function Accordion({ date, présentation, competences, image, poste, entreprise }) {

    const [isOpen, setIsOpen] = useState(false)

    const Open = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div data-aos='zoom-in'className='accordion'>
                <Grid>
                <Grid.Column width={2}>
                    <Image className='logoentr'  src={image} />
                    </Grid.Column>
                    <GridColumn width={10}>
                    <h4>{poste}</h4>
                    <p>{entreprise}</p>
                    <i onClick={() => Open()}><Icon name={isOpen ? 'angle up' : 'angle down'}/></i>
                    <p>{isOpen ? date : ''}</p>
                    <p>{isOpen ? présentation : ''}</p>
                    <p>{isOpen ? competences : ''}</p>
                    </GridColumn>
                </Grid>
            </div>

        </>
    )
}

export default Accordion