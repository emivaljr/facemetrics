import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class Post extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.post.text}</td>
        <td>{this.props.post.like}</td>
        <td>{this.props.post.comments}</td>
        <td>{this.props.post.share}</td>
        <td>{this.props.post.view}</td>
        <td>{this.props.post.createdAt.toDateString()}</td>
      </tr>
    );
  }
}

Post.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  post: PropTypes.object.isRequired,
};
