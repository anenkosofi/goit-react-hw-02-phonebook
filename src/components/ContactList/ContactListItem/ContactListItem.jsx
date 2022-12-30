import { HiOutlinePhone, HiOutlineUserCircle } from 'react-icons/hi';
import { Contact, ContactWrapper, Button } from './ContactListItem.styled';

export function ContactListItem({ contact: { name, number }, deleteContact }) {
  return (
    <Contact>
      <ContactWrapper>
        <p>
          <HiOutlineUserCircle size={20} />
          <span>{name}</span>
        </p>
        <p>
          <HiOutlinePhone size={20} />
          <span>{number}</span>
        </p>
      </ContactWrapper>
      <Button type="button" onClick={deleteContact}>
        Delete
      </Button>
    </Contact>
  );
}
