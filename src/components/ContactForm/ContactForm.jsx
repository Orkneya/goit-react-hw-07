import { useId } from "react";
import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "To short!")
    .max(50, "To long!")
    .required("Required"),
  number: Yup.number().required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialContact = {
    name: "",
    number: "",
  };
  const nameId = useId();
  const numberId = useId();
  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };
  return (
    <div className={css.formWrapper}>
      <Formik
        initialValues={initialContact}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form>
          <div>
            <label htmlFor={nameId}>Name</label>
            <Field type="text" name="name" id={nameId} />
            <ErrorMessage name="name" component="p" />
          </div>
          <div>
            <label htmlFor={numberId}>Number</label>
            <Field type="text" name="number" id={numberId} />
            <ErrorMessage name="number" component="p" />
          </div>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
