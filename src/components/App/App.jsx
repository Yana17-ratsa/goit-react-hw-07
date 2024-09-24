import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';
import {
  selectContacts,
  selectError,
  selectLoading,
} from '../../redux/contactsSlice';

function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    window.localStorage.setItem('contacts', contacts);
  }, [contacts]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading... please wait</p>}
      {error && <p>Error message</p>}
      <ContactList />
    </div>
  );
}

export default App;
