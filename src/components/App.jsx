import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  findContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <Box>
        <GlobalStyle />
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
        </div>
        <div>
          <h2>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.findContact} />
          <ContactList contacts={filteredContacts} />
        </div>
      </Box>
    );
  }
}
