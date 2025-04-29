import React from "react";
// import { Formik, Form, Field } from 'formik';
import css from "./Contact.module.css";
import { BsFillFilePersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

export const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div className={css.main}>
      <p className={css.item}>
        {" "}
        <BsFillFilePersonFill className="css.my-icon" /> {name}{" "}
      </p>
      <p className={css.item}>
        {" "}
        <BsFillTelephoneFill className="css.my-icon" /> {number}{" "}
      </p>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
