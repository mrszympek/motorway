import React from 'react';
import { Formik } from 'formik';

export const SampleForm = () => (
  <div>
    <Formik
      initialValues={{ name: '', email: '', salary: '62', color: '#cccccc', bday: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        if (!values.name) {
          errors.name = "Required"
        }

        if (!values.bday) {
          errors.bday = "Required"
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-field">
            <span>Name</span>
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <p className="form-error">{errors.name && touched.name && errors.name}</p>
          </div>

          <div className="form-field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <p className="form-error">{errors.email && touched.email && errors.email}</p>
          </div>

          <div className="form-field">
            <span>Birth Day</span>
            <input
              type="date"
              name="bday"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.bday}
            />
            <p className="form-error">{errors.bday && touched.bday && errors.bday}</p>
          </div>

          <div className="form-field">
            <span>Color</span>
            <input
              type="color"
              name="color"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.color}
            />
          </div>

          <div className="form-field">
            <span>Salary</span>
            <input
              type="range"
              name="salary"
              min="100"
              max="999"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.salary}
            />
            {values.salary}
          </div>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);
