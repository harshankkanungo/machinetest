import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Support.css";

const Support = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("First Name is required")
      .min(2, "Too short"),
    lastName: Yup.string()
      .required("Last Name is required")
      .min(2, "Too short"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[@$!%*#?&]/,
        "Password must contain at least one special character"
      ),
  });

  return (
    <div className="support-page">
      <h1 className="support-heading">Ready to take one trial?</h1>
      <p className="support-subtext">
        Sign up for a free account and get started today!
      </p>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="signup-form">
          <div className="form-row">
            <div className="form-field">
              <Field type="text" name="firstName" placeholder="First Name" />
              <ErrorMessage
                name="firstName"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-field">
              <Field type="text" name="lastName" placeholder="Last Name" />
              <ErrorMessage
                name="lastName"
                component="div"
                className="error-message"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-field">
              <Field type="text" name="phone" placeholder="Phone Number" />
              <ErrorMessage
                name="phone"
                component="div"
                className="error-message"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <Field
                type="password"
                name="password"
                placeholder="Create Password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>
          </div>
          <button type="submit" className="register-btn">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Support;
