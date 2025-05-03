import React from "react";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const delateTask = (taskId) => {
    dispatch(deleteContact(taskId));
  };

  return (
    <div>
      <ul className={css.list}>
        {contacts.map((contact) => (
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
