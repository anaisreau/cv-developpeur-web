import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component, useEffect } from 'react'
import {
  Button,
  Container,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Visibility,

} from 'semantic-ui-react';
import CV from '../CV-Anais-Reau.pdf'
import './title.scss'
import './NavBar.css'
import Title from './title'
import aos from 'aos'
import 'aos/dist/aos.css'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})




const HomepageHeading = ({ mobile }) => {
  
  useEffect(()=>{
  aos.init({duration : 2000 })
},[]); 
return (

<div className='adaptable'>

  <>
 <Title />


 
   
      <div className='listeContact'
      style={{
        fontSize: mobile ? '2em' : '1.5em',
        fontWeight: 'normal',
        color : mobile ? 'white' : 'black',
        
      }}>
        
     <a data-aos='fade-in'href='mailto:anaisreau@gmail.com'><Icon name='mail'/></a>
     <a data-aos='fade-in'href='https://www.linkedin.com/in/anaisreau/'target='_blanck'><Icon name='linkedin'/></a>
     <a data-aos='fade-in'href='https://github.com/anaisreau' target='_blanck'><Icon name='github'/></a></div>
   
<a href={CV} download><footer>
    <div class="texto">
        <span>
            <i class="fab fa-youtube"></i>
             Télécharger mon CV</span>
    </div>
</footer>
   </a>
</></div>
)
    }
HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {

    const { children } = this.props
    const { fixed } = this.state

    return (

      <Media greaterThan='mobile'>
        <Visibility 
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            textAlign='center'
  
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' href='#' active>
                  Presentation
                </Menu.Item>
                <Menu.Item as='a' href='#formation'>Formation</Menu.Item>
                <Menu.Item as='a' href='#experiences'>Expériences</Menu.Item>
                <Menu.Item as='a' href='#nuage'>Compétences clé</Menu.Item>
                <Menu.Item as='a' href='#portfolio'>Realisations</Menu.Item>
                <Menu.Item as='a' href='#carousel'>Centres d'intérets</Menu.Item>
                <Menu.Item position='right'>

                  <Button href='#contact' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Me contacter</Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    )
    
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at='mobile' >
        <Sidebar.Pushable>
          <Sidebar inverted
          className="sidebar"
            as={Menu}
            animation='overlay'
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            
            <Menu.Item as='a'>Accueil</Menu.Item>
            <Menu.Item href='#formation'as='a'>Formations</Menu.Item>
            <Menu.Item href='#experiences'as='a'>Expériences</Menu.Item>
            <Menu.Item href='#nuage'as='a'>Compétences</Menu.Item>
            <Menu.Item href='#carousel'as='a'>Centres d'interets</Menu.Item>
            <Menu.Item href='#contact'as='a'>Me contacter</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              textAlign='center'
              vertical
            >
              <Container
              >
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>

                    <Button href='#contact'as='a' inverted style={{ marginLeft: '0.5em' }}>
                      Me contacter </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>

    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const NavBar = ({ children }) => {
return (
  <div >
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
  </div>
)
}
NavBar.propTypes = {
  children: PropTypes.node,
}


export default NavBar