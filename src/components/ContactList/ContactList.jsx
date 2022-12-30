import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem';
import { Contacts } from './ContactList.styled';

export function ContactList({ contacts, deleteContact }) {
  return (
    <Contacts>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          deleteContact={() => deleteContact(contact.id)}
        />
      ))}
    </Contacts>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
