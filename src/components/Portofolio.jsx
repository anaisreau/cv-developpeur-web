import React from 'react'
import { Card, Icon, Image, Divider, Segment, Container } from 'semantic-ui-react'
import './Portfolio.css'

const cardPortfolio = [{
  title : "Projet 1 ",
  description : 'Quentin Tarantino',
  description2 : 'Realisé en HTML / CSS / Javascript',
  adresse : 'https://anaisreau.github.io/Site-Tarantino/',
  image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYGxEbhXnVO6YvwBpSW0tl5ugObk8ONetxUnAhTumEGeKNjI1X&usqp=CAU'
},{
  title : "Projet 2 ",
  description : 'Trizz',
  description2 : 'Realisé React.js Semantic UI CSS',
  adresse : 'https://trizz.netlify.app/',
  image : 'https://geo.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FGEO.2Fvar.2Fgeo.2Fstorage.2Fimages.2Fmedia.2Fimages.2Fun-hetre-majestueux.2F2363733-1-fre-FR.2Fun-hetre-majestueux.2Ejpg/1120x630/background-color/ffffff/quality/90/les-arbres-aussi-sensibles-que-les-humains.jpg'
},{
  title : "Projet 3 ",
  description : 'Pericolo',
  description2 : 'React.js / Node.js / Sequelize ',
  adresse : 'https://anaisreau.github.io/Site-Tarantino/',
  image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYGxEbhXnVO6YvwBpSW0tl5ugObk8ONetxUnAhTumEGeKNjI1X&usqp=CAU'
},{
  title : "Hackathon 1 ",
  description : 'Geek Trotter',
  description2 : 'React.js / Axios',
  adresse : 'https://geek-trotter.netlify.app/',
  image : 'https://media.ouest-france.fr/v1/pictures/MjAxNzA1NmI0NTk5YjI0OTUyNjcwODRlNTY3NmYwZjljYzAwMjg?width=480&height=270&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=c764c1f4241a8eff327ed89ad2f13cc15602b187b11d192a222f758028ef2293'
},{
  title : "Hackathon 2 ",
  description : 'TravelHealth',
  description2 : 'React.js / Node.js / MySQL ',
  adresse : 'https://anaisreau.github.io/Site-Tarantino/',
  image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYGxEbhXnVO6YvwBpSW0tl5ugObk8ONetxUnAhTumEGeKNjI1X&usqp=CAU'
},{
  title : "Checkpoint ",
  description : 'NaturaTrip',
  description2 : 'React.js / Node.js / MySQL ',
  adresse : 'https://anaisreau.github.io/Site-Tarantino/',
  image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYGxEbhXnVO6YvwBpSW0tl5ugObk8ONetxUnAhTumEGeKNjI1X&usqp=CAU'
}]

const Portofolio = () => {
return( 
  <div id='portfolio'>
            

  <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a>Portfolio</a>
        </Divider>
   <Icon className='accueil'href ='#' name ='arrow up'></Icon>
     
       <div className='card'>
       {cardPortfolio.map(e => (
          <Card
          
          image={e.image}
          header={e.title}
          meta={e.description2}
          description={e.description}
          // extra={e.adresse}
        />))}</div>
 

 
       
  </div>
  )
}

export default  Portofolio