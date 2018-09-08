import React, { Component, Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <Fragment>
        <label htmlFor={ field.formAssociation }>{ field.formLabel }</label>
        { (field.formType === 'textarea') ? (
          <textarea id={ field.formAssociation } placeholder={ `Enter ${field.formLabel}` } { ...field.input } rows="3" />
        ) : (
          <input type={ field.formType } id={ field.formAssociation } placeholder={ `Enter ${field.formLabel}` } { ...field.input } />
        ) }
      </Fragment>
    ); 
  }

  render() {
    return (
      <Fragment>
        <form>
          <Field name="title" component={ this.renderField } formLabel="Title" formAssociation="form-title" formType="text" />
          <Field name="categories" component={ this.renderField } formLabel="Categories" formAssociation="form-categories" formType="text" />
          <Field name="content" component={ this.renderField } formLabel="Content" formAssociation="form-content" formType="textarea" />
        </form>
      </Fragment>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm',
})(PostsNew);
