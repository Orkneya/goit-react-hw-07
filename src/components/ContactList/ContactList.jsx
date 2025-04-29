import React from "react";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const delateTask = (taskId) => {
    dispatch(deleteContact(taskId));
  };

  const filteredContacts = contacts
    .filter((contact) => contact !== null)
    .filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <div>
      <ul className={css.list}>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={css.item}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
              onDelete={delateTask}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
