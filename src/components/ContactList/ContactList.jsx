import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {

  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))} 
    </ul>
  );
};
export default ContactList;
