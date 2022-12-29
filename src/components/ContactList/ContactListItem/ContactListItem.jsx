export function ContactListItem({ contact: { name, number } }) {
  return (
    <li>
      {name}: {number}
    </li>
  );
}
