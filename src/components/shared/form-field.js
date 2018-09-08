import React, { Fragment } from 'react';

export default ({ formAssociation, formLabel, formType, input }) => (
  <Fragment>
    <label htmlFor={ formAssociation }>{ formLabel }</label>
    { (formType === 'textarea') ? (
      <textarea id={ formAssociation } placeholder={ `Enter ${formLabel}` } { ...input } rows="3" />
    ) : (
      <input type={ formType } id={ formAssociation } placeholder={ `Enter ${formLabel}` } { ...input } />
    ) }
  </Fragment>
);
