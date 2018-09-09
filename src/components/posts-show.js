/* eslint-disable react/prefer-stateless-function */

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    /* eslint-disable-next-line no-shadow */
    const { match, fetchPost } = this.props;
    const { id } = match.params;
    fetchPost(id);
  }

  onDeleteClick = (event) => {
    /* eslint-disable-next-line no-shadow */
    const { match, deletePost, history } = this.props;
    const { id } = match.params;
    deletePost(id, () => {
      history.push('/');
    });
  };

  render() {
    const { post } = this.props;
    if (!post) return <p>Loading...</p>;
    return (
      <Fragment>
        <div className="float-left">
          <Link to="/" className="button primary small">Back to Index</Link>
        </div>
        <div className="float-right">
          <button type="button" className="button alert small" onClick={ this.onDeleteClick }>Delete Post</button>
        </div>
        <div className="clearfix" />
        
        <h3>{ post.title }</h3>
        <h6>Categories: { post.categories }</h6>
        <p>{ post.content }</p>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ posts }, ownProps) => {
  const { id } = ownProps.match.params;
  const post = posts[id];
  return { post };
};

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
