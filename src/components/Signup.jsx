import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import Success from "./Success";
import { UserContext } from "../contexts/userContext";

const Signup = () => {
  const { setUserData, userData } = useContext(UserContext);
  const [signUpUser, setSignUpUser] = useState("");

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        setSignUpUser(values);
        setUserData(values); // Store the whole user data
        console.log(userData);
        action.resetForm();
      },
    });

  return signUpUser ? (
    <Success />
  ) : (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm rounded-lg shadow-2xl border border-gray-100 p-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3 text-start">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                autoComplete="name"
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.name && touched.name ? (
                <p className="text-sm text-red-600 py-1 ml-1">{errors.name}</p>
              ) : null}
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.email && touched.email ? (
                <p className="text-sm text-red-600 py-1 ml-1">{errors.email}</p>
              ) : null}
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                placeholder="Enter password"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.password && touched.password ? (
                <p className="text-sm text-red-600 py-1 ml-1">
                  {errors.password}
                </p>
              ) : null}
            </div>
          </div>
          <div>
            <label
              htmlFor="confirm_password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Confirm password
            </label>
            <div className="mt-2">
              <input
                id="confirm_password"
                name="confirm_password"
                type="password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                placeholder="Confirm password"
                autoComplete="off"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.confirm_password && touched.confirm_password ? (
                <p className="text-sm text-red-600 py-1 ml-1">
                  {errors.confirm_password}
                </p>
              ) : null}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
