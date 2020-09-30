import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Header,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Visibility,

} from 'semantic-ui-react';
import './NavBar.css'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})




const HomepageHeading = ({ mobile }) => (
  <Container text >
    <Header
      as='h1'
      content='Anais Réau'
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'bold',
        marginBottom: 0,
        marginTop: mobile ? '4em' : '1.2em',
        color : mobile ? 'white' : 'black'
      }}
    />
    <Header
      as='h2'
      content='Developpeur FullStack React.js / Node.js'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.7em' : '1em',
      }}
    />
      <div className='listeContact'
      style={{
        fontSize: mobile ? '2em' : '1.5em',
        fontWeight: 'normal',
        color : mobile ? 'white' : 'black',
        
      }}>
   
    
     
     <a href='mailto:anaisreau@gmail.com'><Icon name='mail'/></a>
     <a href='https://www.linkedin.com/in/anaisreau/'target='_blanck'><Icon name='linkedin'/></a>
     <a href='https://github.com/anaisreau' target='_blanck'><Icon name='github'/></a>
     </div>
     </Container>
)

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

                  <Button as='a' href='#contact' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
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
            as={Menu}
            animation='overlay'
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
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

const NavBar = ({ children }) => (

  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

NavBar.propTypes = {
  children: PropTypes.node,
}


export default NavBar