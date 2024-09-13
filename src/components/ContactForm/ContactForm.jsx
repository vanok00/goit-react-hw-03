import { Field, Form, Formik } from "formik";
import styles from "./Contactform.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const ContactForm = ({ handleAddContacts }) => {
  const initialValues = {
    username: "",
    number: "",
  };

  const nameId = nanoid();
  const emailId = nanoid();

  const handleSubmit = (values, options) => {
    handleAddContacts({
      username: values.username,
      number: values.number,
      id: nanoid(),
    });
    options.resetForm();
  };

  const onlyWords = /^[a-zA-Z]+$/;

  const orderSchema = Yup.object().shape({
    username: Yup.string()
      .matches(onlyWords, "ONLY WORDS PLEASE")
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("This field is required!"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={orderSchema}
    >
      <Form className={styles.contactForm}>
        <label className={styles.labelForm}>
          <span>Name:</span>
          <Field
            id={nameId}
            className={styles.inputContactForm}
            name="username"
            type="text"
          />
        </label>
        <label className={styles.labelForm}>
          <span>Number:</span>
          <Field
            id={emailId}
            className={styles.inputContactForm}
            type="tel"
            name="number"
          />
        </label>
        <button className={styles.addButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
