import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';

import { Posts } from '../api/posts.js';

import Task from './Task.jsx';

import Post from './Post.jsx';

// App component - represents the whole app
class App extends Component {
  renderPosts() {
    return this.props.posts.map((post) => (
      <Post key={post._id} post={post} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>

        <table>
          <thead>
          <tr>
            <th>Post</th>
            <th>Curtidas</th>
            <th>Comentarios</th>
            <th>Visualizacoes</th>
            <th>Criado em</th>
          </tr>
          </thead>
          <tbody>
          {this.renderPosts()}
          </tbody>
        </table>
      </div>
    );
  }
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    posts: Posts.find({}).fetch(),
  };
}, App);
