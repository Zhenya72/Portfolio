import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import { useLanguage } from '../../translations/LanguageContext';

const ContactForm = () => {
  const { t } = useLanguage();

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(t('form_error_name')),
    email: Yup.string().email(t('form_error_email_inv')).required(t('form_error_email')),
    message: Yup.string().required(t('form_error_message')),
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
      toast.success(t('form_Submit_ok'), {
      position: "top-right",
      autoClose: 5000,
      });
      resetForm();
    }
    catch (error) {
      toast.error(`${t('form_Submit_error')} ${error.message}`, {
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
          <label htmlFor="name">{t('form_name')}</label>
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
            className='form__control'
            onFocus={() => handleFocus('email')}
            onBlur={(e) => handleBlur('email', e.target.value)}
          />
          <ErrorMessage name="email" component="div" className="error" />
        </div>

        <div className={`mb-2 form__label ${focusedFields.message || initialValues.message ? 'focused' : ''}`}>
          <label htmlFor="message">{t('form_message')}</label>
          <Field
            as="textarea"
            id="message"
            name="message"
            className='form__control'
            onFocus={() => handleFocus('message')}
            onBlur={(e) => handleBlur('message', e.target.value)}
          />
          <ErrorMessage name="message" component="div" className="error" />
        </div>

        <div className="form__button">
          <button className="button" type="submit">{t('form_but')}</button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
