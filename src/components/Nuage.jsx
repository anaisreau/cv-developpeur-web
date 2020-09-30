import React, { Component } from 'react';
import randomColor from 'randomcolor';
import TagCloud from 'react-tag-cloud';
import CloudItem from './CloudItem';
import './Nuage.css'
import { Divider, Segment, Icon  } from 'semantic-ui-react'

const styles = {
  large: {
    fontSize: 60,
    fontWeight: 'bold'
  },
  small: {
    opacity: 0.7,
    fontSize: 16
  }
};

class Nuage extends Component {
  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 3000);
  }

  render() {
    return (
      <div id='nuage'>
      <Divider
         as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a>Competences Clé
</a> 
        </Divider>
        <Icon className='accueil'href ='#' name ='arrow up'></Icon>

      <Segment style={{ padding: '15em 1em' }} vertical >
      <div className='app-outer'>
        <div className='app-inner'>
          <TagCloud 
            className='tag-cloud'
            style={{
              fontFamily: 'sans-serif',
              //fontSize: () => Math.round(Math.random() * 50) + 16,
              fontSize: 30,
              color: () => randomColor({
                hue: 'blue'
              }),
              padding: 5,
            }}>
            
            <div style={styles.large}>Javascript</div>
            <div style={styles.large}>React.js</div>
            <div style={styles.large}>SQL</div>
            <div style={styles.large}>Methodes Agiles</div>

            <div style={{fontFamily: 'courier'}}>Git</div>
            <div style={{fontSize: 30}}>Semantic UI</div>
            <div style={{fontStyle: 'italic'}}>HTML</div>
            <div style={{fontWeight: 200}}>CSS</div>
            <div style={{fontWeight: 200}}>Python</div>

            <div style={{color: 'green'}}>ReactStrap</div>
            <div style={{color: 'green'}}>SCRUM</div>

            <div style={styles.small}>Bootstrap</div>
            <div style={styles.small}>Redux</div>
            <div style={styles.small}>Context</div>
            <div style={styles.small}>Sequelize</div>
            <div style={styles.small}>Postman</div>
            <div style={styles.small}>Express</div>
            <div style={styles.small}>GitHub</div>

          </TagCloud>
        </div>
      </div>
      
      </Segment><br/><p>Mais aussi ... </p>
      <p>Au travers de mes différentes expériences et de mon parcours atypique j'ai eu l'occasion d'apprendre : </p>
        <li>Le management d'equipe, </li>
        <li>La restauration, </li>
        <li>La gestion d'entreprise, </li>
        <li>La gestion de planning, </li>
        <li>La creation de visuels commerciaux, </li>
        <li>L'optimisation des taches des équipes </li>
<br/>
        <p>Je suis une personne avide de nouvelles expériences et pour tout cela je ne regrette aucune des étapes de mon parcours car elles m'ont chacune permi de developper une voire plusieurs atouts supplémentaire qui me serviront tout  au long de ma carrière </p>


      
      </div>
    );
  }
}

export default Nuage;
