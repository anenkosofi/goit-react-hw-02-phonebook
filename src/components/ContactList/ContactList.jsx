import { ContactListItem } from './ContactListItem';

export function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
