import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  constructor(props) {
    super(props);
    this.renderField = this.renderField.bind(this);
  }

  renderField(field) {
    const {
      meta: { error, touched }
    } = field;
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        {touched ? error : ''}
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="title" component={this.renderField} label="Title" />
        <Field
          name="categories"
          component={this.renderField}
          label="Categories"
        />
        <Field name="content" component={this.renderField} label="Content" />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
        <Link to="/">
          <button className="btn btn-danger">Cancel</button>
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = (
      <p className="error-validation"> Enter some content please</p>
    );
  }

  if (!values.categories) {
    errors.categories = <p className="error-validation">Enter a category</p>;
  }

  if (!values.content) {
    errors.content = (
      <p className="error-validation">Enter some content please</p>
    );
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(
    null,
    { createPost }
  )(PostsNew)
);
