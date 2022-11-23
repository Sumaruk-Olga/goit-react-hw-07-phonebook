import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Input } from "./ContactForm.styled";

import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';


export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
 
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    e.target.name === 'name' ?
      setName(e.currentTarget.value) :
      setNumber(e.currentTarget.value);
    }

  const reset = () => {
    setName('');
    setNumber('');
    };


    const isNamePresent = (name) => {
      const normalizedName = name.toLowerCase();
      return contacts.find(item => item.name.toLowerCase() === normalizedName);
    }
    
  const handleSubmit = (e) => {
      e.preventDefault();
      const isName = isNamePresent(name);

      if (!isName) {
        dispatch(addContact({ name, phone:number }));
        reset();
      } else {
        alert(`${name} is already in contacts`);
      }    
  }
  
  return <Form autoComplete="off"
   onSubmit={handleSubmit} 
   >
          <label>Name
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>Number
            <Input
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <Button type='submit'>add</Button>
      </Form>
}
