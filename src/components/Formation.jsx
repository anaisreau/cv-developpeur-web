import React, {useEffect} from 'react'
import { Item, Divider, Icon} from 'semantic-ui-react'
import aos from 'aos'
import 'aos/dist/aos.css'

const Formations =()=>{

  useEffect(()=>{
    aos.init({duration : 2000 })
  },[]); 

return (

  <div id='formation' data-aos='fade-in'>
<Divider
         as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <p>Formations</p> 
        </Divider>
        <Icon className='accueil'href ='#' name ='arrow up'></Icon>

            <p style={{ fontSize: '1.33em' }}>
            <Item.Group divided >
              
    <Item >
      <Item.Image size='tiny' src='https://upload.wikimedia.org/wikipedia/fr/e/e4/WildCodeSchool_logo_pink_background_400x220.png' />
      <Item.Content verticalAlign='top'><h3>Wild Code School</h3>
<h4>Développeur web et web Mobile</h4>
<p>2020</p>
</Item.Content>
    </Item>

    <Item data-aos='zoom-in'>
      <Item.Image size='tiny' src='https://upload.wikimedia.org/wikipedia/fr/thumb/8/83/Univ_Aix-Marseille_-_IUT.svg/1200px-Univ_Aix-Marseille_-_IUT.svg.png' />
      <Item.Content verticalAlign='top'><h3>IUT d'Aix-Marseille</h3>
<h4>Licence de commerce inter entreprises</h4>
<p>2011</p></Item.Content>
    </Item>

    <Item data-aos='zoom-in'>
      <Item.Image size='tiny' src='https://www.gretadrone.fr/wp-content/uploads/2017/02/Logo-Greta-Drone-blanc.png' />
      <Item.Content  verticalAlign='top'><h3>GRETA</h3>
<h4>Assistante de gestion PME PMI</h4>
<p>2009 – 2011</p> </Item.Content>
    </Item>
  </Item.Group>
            </p>
            </div>
)
}

export default Formations