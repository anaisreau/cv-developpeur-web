import React, { useEffect}  from'react'
import {Divider} from 'semantic-ui-react'
import './Experiences.css'
import logo from '../PO.jpeg'
import aos from 'aos'
import 'aos/dist/aos.css'
import Accordion from './Accordion'

const Experiences =()=>{

  

const exp=[
  {
  poste : 'Developpeur Web FullStack', 
  entreprise: 'Marmignon Brothers',
  présentation : 'Creation d\'un site de formation en ligne' ,
  type : 'stage', 
  image : 'https://www.marmignonbrothers.com/wp-content/uploads/2019/04/cropped-V1-Couleur.png', 
  competences : 'React.js, Node.js, Semantic-ui, MongoDB, SQL',
  date : '01/09/2020'
}, 
{
  poste : 'Projet 3 ', 
  entreprise: 'Wild Code School et Immobiliere Pujol',
  présentation : 'Dans le cadre du drame de la rue d\'Aubagne à Marseille et de la mise en péril d\'un certain nombre d\'immeuble, création d\'une application visant a faciliter les signalements d\'insalubrité aux personnes compétentes ' ,
  type : 'Projet dans le cadre de la formation de developpeur Web', 
  image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjz5qMozaRxJbKNApdqF7Y-vJZVl8ysUlS9g&usqp=CAU',
  competences : 'React.js, Node.js, Semantic-ui, SQL',
  date : '01/05/2020'
},
{
  poste : 'Projet 2 ', 
  entreprise: 'Wild Code School',
  présentation : 'Creation d\'une application ludique favorisant la reforestation. A travers des quizz donner la possibiliter aux participants de planter des arbres' ,
  type : 'Projet dans le cadre de la formation de developpeur Web', 
  image : 'https://photo.superimmo.com/photos/shops/02/82/28208/sp_large_pad_logo-pujol-hits.png', 
  competences : 'React.js, Node.js, Semantic-ui, TypeForm, SQL',
  date : '01/04/2020'
},
{
  poste : 'Assistante de Direction ', 
  entreprise: 'Caisse d\'Allocations Familiales des Bouches-du-Rhône',
  présentation : 'Assistance de la sous Directrice - Creation d\'outils optimisant les taches sur Visual Basic. J\'ai egalement été volontaire pour former bénévolement les équipe lors d\'une transition numérique ' ,
  type : 'CDI', 
  image : 'https://upload.wikimedia.org/wikipedia/fr/thumb/c/cb/Caisse_d_allocations_familiales_france_logo.svg/1200px-Caisse_d_allocations_familiales_france_logo.svg.png', 
  competences : 'Visual Basic, Pack Office',
  date : '01/03/2015'
},
{
  poste : 'Assistante de Gestion', 
  entreprise: 'Financiere Jaunay ',
  présentation : 'Gestion des commandes, Facturation, suivi clientèle , Relance impayés, Gestion des litiges , Gestion du courrier, e-mail, transmission des informations, Divers travaux de secrétariat , Contrôle des recettes et dépenses mensuelles, Elaboration des commissions VRP et représentants' ,
  type : 'CDI', 
  image : 'https://comptoir-des-saveurs.com/wp-content/uploads/2018/03/CDS_Logo_Header_VERT.png', 
  competences : 'Visual Basic, Pack Office',
  date : '01/03/2015'
},
{
  poste : 'Assistante de Direction ', 
  entreprise: 'Caisse d\'Allocations Familiales des Bouches-du-Rhône',
  présentation : 'Assistance de la sous Directrice - Creation d\'outils optimisant les tâches sur Visual Basic. J\'ai egalement été volontaire pour former bénévolement les équipes lors d\'une transition numérique ' ,
  type : 'CDI', 
  image : 'https://upload.wikimedia.org/wikipedia/fr/thumb/c/cb/Caisse_d_allocations_familiales_france_logo.svg/1200px-Caisse_d_allocations_familiales_france_logo.svg.png', 
  competences : 'Visual Basic, Pack Office',
  date : '01/09/2014'
}, 
{
  poste : 'Création et Gestion Restaurant Pizzeria Traiteur ', 
  entreprise: 'Caisse d\'Allocations Familiales des Bouches-du-Rhône',
  présentation : 'Creation d\'un restaurant, pizzeria, traiteur. Gestion des commandes, mise en place, service et cuisine, relations commerciales, Gestion administrative' ,
  type : 'Gerante', 
  image: logo,
  competences : 'Management, Normes d\'hygiene, Cuisine  ',
  date : '01/07/2013'
}, 
{
  poste : 'Assistante Directrice des Ventes ', 
  entreprise: 'SNCF',
  présentation : 'Creation d\'outils optimisant les taches sur Visual Basic. Conseil clientèle en forums et salons, Creation de reportings commerciaux automatisés, création de visuels commerciaux, divers travaux de secrétariat  ' ,
  type : 'Contrat de Professionnalisation', 
  image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Logo_SNCF_2011.svg/1200px-Logo_SNCF_2011.svg.png',
  competences : 'Pack Office',
  date : '26/09/2012'
}, 
{
  poste : 'Assistante Animateur des ventes ', 
  entreprise: 'SNCF',
  présentation : 'Conseil clientèle, divers travaux de secretariat, création de visuels commerciaux' ,
  type : 'Contrat de Professionnalisation', 
  image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Logo_SNCF_2011.svg/1200px-Logo_SNCF_2011.svg.png',
  competences : 'Pack Office',
  date : '06/09/2010'
}, 
{
  poste : 'Assistante de Direction ', 
  entreprise: 'SNCF',
  présentation : 'Divers travaux de secretariat, création de visuels commerciaux' ,
  type : 'Contrat de Professionnalisation', 
  image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Logo_SNCF_2011.svg/1200px-Logo_SNCF_2011.svg.png',
  competences : 'Pack Office',
  date : '09/09/2008'
}, 
]

useEffect(()=>{
    aos.init({duration : 2000 })
  },[]);

  return(
<div id='experiences'>
  <Divider
         as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <p>Expériences Professionnelles</p> 
        </Divider>
  {exp.map(e => 
  <>
    <Divider/>
      <Accordion 
      image={e.image}
      poste={e.poste}
      entreprise={e.entreprise}
      date={e.date}
      présentation={e.présentation}
      compentences={e.competences}
      />
      </>
         )}



</div>
  )
}

export default Experiences