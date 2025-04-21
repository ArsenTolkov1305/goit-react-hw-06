import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Name is required"),
  number: Yup.string()
    .min(3, "Number must be at least 3 characters")
    .max(50, "Number must be less than 50 characters")
    .required("Number is required"),
});

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.fieldWrapper}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <Field type="text" name="name" className={styles.input} />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>

        <div className={styles.fieldWrapper}>
          <label htmlFor="number" className={styles.label}>
            Number
          </label>
          <Field type="tel" name="number" className={styles.input} />
          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
          />
        </div>

        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
