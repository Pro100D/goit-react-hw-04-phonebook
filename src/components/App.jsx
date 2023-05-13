import { useState, useEffect } from 'react';
import shortid from 'shortid';

import Form from './Form/Form';
import ConatctList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [filter, setFilter] = useState('');

  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? ''
  );

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contactAdd => {
    const checkContact = contacts.find(
      contact => contact.name === contactAdd.name
    );

    if (checkContact) {
      window.alert(`${contactAdd.name} is already in contacts.`);
      return;
    }
    const newContact = {
      id: shortid.generate(),
      name: contactAdd.name,
      number: contactAdd.number,
    };

    setContacts(prevState => [newContact, ...prevState]);
  };
  const handleDelete = e => {
    setContacts(prevState => prevState.filter(contact => contact.id !== e));
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };
  const toLowerCaseContact = filter.toLowerCase();

  const visibleContact = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(toLowerCaseContact)
  );

  return (
    <>
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} contacts={contacts} />
      <ConatctList contactsArray={visibleContact} handleDelete={handleDelete} />
    </>
  );
};

export default App;
