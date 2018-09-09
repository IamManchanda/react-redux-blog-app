import React, { Fragment } from 'react';

export default ({ formAssociation, formLabel, formType, input, meta: { touched, error } }) => (
  <Fragment>
    <label 
      className={ (touched && error) ? 'is-invalid-label' : '' } 
      htmlFor={ formAssociation }
    >
      { formLabel }
    </label>
    { (formType === 'textarea') ? (
      <textarea 
        className={ (touched && error) ? 'is-invalid-input' : '' } 
        id={ formAssociation } 
        placeholder={ `Enter ${formLabel}` } 
        { ...input } 
        rows="3" 
      />
    ) : (
      <input 
        className={ (touched && error) ? 'is-invalid-input' : '' } 
        type={ formType } 
        id={ formAssociation } 
        placeholder={ `Enter ${formLabel}` } 
        { ...input } 
      />
    ) }
    { (touched && error) ? (
      <span className="form-error">
        { error }
      </span>
    ) : null }
  </Fragment>
);
