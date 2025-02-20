import React from 'react'
import s from "./SearchBar.module.css";
import { Field, Form, Formik } from 'formik';

const SearchBar = ({ search, query }) => {

const initialValues = {
  query,
};

const handleSubmit = ( value ) => search(value);

  return (<Formik 
    initialValues={initialValues}
    onSubmit={handleSubmit}>
      <Form className={s.searchForm}>
        <Field  type="text" name="query" className={s.searchInput} placeholder="Search movie..."/>
        <button type="submit" className={s.searchBtn}>Search</button>
      </Form>  
      </Formik>)
      };

export default SearchBar;
