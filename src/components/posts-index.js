import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    /* eslint-disable-next-line no-shadow */
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  renderPosts() {
    const { posts } = this.props;
    return _.map(posts, (post) => {
      return (
        <Fragment key={ post.id }>
          <li className="list-group-item">
            <p>{ post.title }</p>
            <p>{ post.categories }</p>
            <p>{ post.content }</p>
          </li>
        </Fragment>
      );
    });
  }

  render() {
    return (
      <Fragment>
        <h3 className="float-left">Posts</h3>
        <div className="float-right">
          <Link className="button primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <div className="clearfix" />
        <ul className="list-group">
          { this.renderPosts() }
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { posts } = state;
  return { posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
