import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box.styled';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { PhonebookBox, ContactBox } from './App.styled';

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
    if (
      this.state.contacts.every(oldContact => oldContact.name !== contact.name)
    ) {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    } else {
      alert(`${contact.name} is already in contacts.`);
    }
  };

  findContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <Box>
        <GlobalStyle />
        <PhonebookBox>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
        </PhonebookBox>
        <ContactBox>
          <h2>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.findContact} />
          <ContactList
            contacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        </ContactBox>
      </Box>
    );
  }
}
