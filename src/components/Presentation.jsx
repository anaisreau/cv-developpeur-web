import { createMedia } from '@artsy/fresnel'
import React, { useEffect} from 'react'
import {
  Container,
  Header,
  List,
  Divider
} from 'semantic-ui-react';
import './NavBar.css'
import { useDencrypt } from "use-dencrypt-effect";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

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

  const values = ["Anaïs Réau", "Developpeuse", "FullStack", "React.js/Node.js"];


const Presentation = ({ mobile }) => {
  const { result, deEncrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      deEncrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 2000);

    return () => clearInterval(action);
  }, []);

  return(
  <><div>{result}</div>
  {/* <Container text > ;
    <Header
      as='h1'
      content='Anais Réau'
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'bold',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
   
    <Header
      as='h2'
      content='Developpeur FullStack React.js / Node.js'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
      <List>
    <List.Item>
      <List.Icon  name='marker' />
      <List.Content>La Destrousse</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='mail' />
      <List.Content>
        <a href='mailto:anaisreau@gmail.com'>anaisreau@gmail.com</a>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='linkedin' />
      <List.Content>
        <a href='https://www.linkedin.com/in/anaisreau/'target='_blanck'>Profil Linkedin</a>
      </List.Content>
</List.Item>
      <List.Item>
      <List.Icon name='github' />
      <List.Content>
        <a href='https://github.com/anaisreau' target='_blanck'>Profil Github</a>
      </List.Content>
    </List.Item>
  </List>
  </Container> */}
  </>
  )}





export default Presentation