import React, { Component, Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPosts } from '../actions';

import FormField from './shared/form-field';

class PostsNew extends Component {
  onSubmit = (event) => {
    /* eslint-disable-next-line no-shadow */
    const { createPosts, history } = this.props;
    createPosts(event, () => {
      history.push('/');
    });
  };
  
  renderField(field) { return <FormField { ...field } />; }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Fragment>
        <h3>Add a Post</h3>
        <form onSubmit={ handleSubmit(this.onSubmit) }>
          <Field component={ this.renderField } name="title" formLabel="Title" formAssociation="form-title" formType="text" />
          <Field component={ this.renderField } name="categories" formLabel="Categories" formAssociation="form-categories" formType="text" />
          <Field component={ this.renderField } name="content" formLabel="Content" formAssociation="form-content" formType="textarea" />
          <div className="button-group">
            <input type="submit" value="Submit" className="button primary submit-button" />
            <Link to="/" className="button alert cancel-button" type="button">Cancel</Link>
          </div>
        </form>
      </Fragment>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.title) errors.title = 'Please enter the Title to Submit the Form.';
  if (!values.categories) errors.categories = 'Please enter the Categories to Submit the Form.';
  if (!values.content) errors.content = 'Please enter the Content to Submit the Form.';
  return errors;
};

export default reduxForm({ validate, form: 'PostsNewForm' })(connect(null, { createPosts })(PostsNew));
