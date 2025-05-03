import React from "react";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectNameFilter } from "../../redux/filtersSlice";
// import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const filter = useSelector(selectNameFilter);
  const contacts = useSelector((state) => state.contacts.items);
  const error = useSelector((state) => state.contacts.error);
  const loading = useSelector((state) => state.contacts.loading);
  const dispatch = useDispatch();
  console.log(123, contacts);

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
      {loading && <h2>loading...</h2>}
      {error && <h2>Server is dead...</h2>}
    </div>
  );
};

export default ContactList;
