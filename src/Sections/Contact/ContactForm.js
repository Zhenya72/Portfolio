import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const ContactForm = () => {
    const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const [focusedFields, setFocusedFields] = useState({
    name: false,
    email: false,
    message: false,
  });


  const handleFocus = (fieldName) => {
    setFocusedFields((prev) => ({ ...prev, [fieldName]: true }));
  };

  const handleBlur = (fieldName, value) => {
    setFocusedFields((prev) => ({ ...prev, [fieldName]: !!value }));
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const serviceId = 'service_qgwg2rs';
      const templateId = 'template_vh4f8hm';
      const publicKey = 'cIgt7zSB7cdiEzsgg';
      await emailjs.send(serviceId, templateId, values, publicKey);
      toast.success(`Form submitted successfully!`, {
      position: "top-right",
      autoClose: 5000,
      });
      resetForm();
    }
    catch (error) {
      toast.error(`Error when submitting a form: ${error.message}`, {
      position: "top-right",
      autoClose: 5000,
      });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="form" autoComplete="off">
        <div className={`mb-2 form__label ${focusedFields.name || initialValues.name ? 'focused' : ''}`}>
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            id="name"
            name="name"
            className='form__control'
            onFocus={() => handleFocus('name')}
            onBlur={(e) => handleBlur('name', e.target.value)}
          />
          <ErrorMessage name="name" component="div" className="error" />
        </div>

        <div className={`mb-2 form__label ${focusedFields.email || initialValues.email ? 'focused' : ''}`}>
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            id="email"
            name="email"
            // placeholder="Enter your email"
            className='form__control'
            onFocus={() => handleFocus('email')}
            onBlur={(e) => handleBlur('email', e.target.value)}
          />
          <ErrorMessage name="email" component="div" className="error" />
        </div>

        <div className={`mb-2 form__label ${focusedFields.message || initialValues.message ? 'focused' : ''}`}>
          <label htmlFor="message">Message</label>
          <Field
            as="textarea"
            id="message"
            name="message"
            // placeholder="Enter your message"
            className='form__control'
            onFocus={() => handleFocus('message')}
            onBlur={(e) => handleBlur('message', e.target.value)}
          />
          <ErrorMessage name="message" component="div" className="error" />
        </div>

        <div className="form__button">
          <button className="button" type="submit">SEND</button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
