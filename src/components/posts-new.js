import React, { Component, Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';

import FormField from './shared/form-field';

class PostsNew extends Component {
  renderField(field) { return <FormField { ...field } />; }

  render() {
    return (
      <Fragment>
        <form>
          <Field component={ this.renderField } name="title" formLabel="Title" formAssociation="form-title" formType="text" />
          <Field component={ this.renderField } name="categories" formLabel="Categories" formAssociation="form-categories" formType="text" />
          <Field component={ this.renderField } name="content" formLabel="Content" formAssociation="form-content" formType="textarea" />
        </form>
      </Fragment>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm',
})(PostsNew);
