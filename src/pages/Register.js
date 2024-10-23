import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Auth.css";

const Register = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required("Confirm password is required"),
  });

  return (
    <div className="auth-page">
      <h1 className="auth-heading">Register</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="auth-form">
          <div className="form-field">
            <Field type="text" name="firstName" placeholder="First Name" />
            <ErrorMessage name="firstName" component="div" className="error-message" />
          </div>

          <div className="form-field">
            <Field type="text" name="lastName" placeholder="Last Name" />
            <ErrorMessage name="lastName" component="div" className="error-message" />
          </div>

          <div className="form-field">
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>

          <div className="form-field">
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>

          <div className="form-field">
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="error-message"
            />
          </div>

          <button type="submit" className="auth-btn">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
