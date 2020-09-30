import React  from 'react'
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react'
import './Footer.css'



const Footer =()=> { 
return(
<Segment inverted vertical style={{ padding: '5em 5em' }}>
<Container>
  <Grid divided inverted stackable>
    <Grid.Row>
      <Grid.Column className='footer'>
        <Header inverted as='h5' content='Tous droits reservés' />
        <Header inverted as='h5' content='@Anaïs Réau' />
        <List  link inverted>
          <a href='mailto:anaisreau@gmail.com'><List.Item as='a'>Me contacter</List.Item></a>
          <a href='https://www.linkedin.com/in/anaisreau/'target='_blanck'> <List.Item as='a'>Linkedin</List.Item></a>
          <a href='https://github.com/anaisreau' target='_blanck'> <List.Item as='a'>Github</List.Item></a>
       
        </List>
      </Grid.Column>
      
    </Grid.Row>
  </Grid>
</Container>
</Segment>)}

export default Footer 