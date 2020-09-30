import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import  {Form, Icon } from 'semantic-ui-react'

init("user_UYjAJmFHXhDWHdmQ0HrCs");


export default class ContactUs extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state
    let templateParams = {
      from_name: `${name}, ${email}`,
      to_name: 'anaisreau@gmail.com',
      subject: subject,
      message: message,
    }
    emailjs.send('user_UYjAJmFHXhDWHdmQ0Hr', 'template_28e85dj', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

    
    this.resetForm()
    alert('Votre message a bien été envoyé')
  }
  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
  render() {
    return (
      <div id='contact'>
        <Icon className='accueil'href ='#' name ='arrow up'></Icon>

          <Form onSubmit={this.handleSubmit.bind(this)}>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Nom' placeholder='Votre nom' value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}/>
          <Form.Input fluid label='Adresse Email' placeholder='email' value={this.state.email}
                onChange={this.handleChange.bind(this, 'email')} />
          <Form.Input fluid label='Sujet' placeholder='Sujet'  value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}/>

        </Form.Group>

        <Form.TextArea name="message" label='Votre message' placeholder='Votre message' value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')} />
        <Form.Button>Envoyer</Form.Button>
      </Form>
      </div>
        );
  }
}