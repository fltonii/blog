import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index'
import _ from 'lodash';


class PostsShow extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }
  
  render() {
    const { selectedPost } = this.props;
    
    const renderPost = post => (
        <div>
          <h1>{post.title}</h1>
          <br/>
          <h3>Categories: {post.categories}</h3>
          <br/>
          <br/>
          <br/>
          <h3>{post.content}</h3>
        </div>
    );
    
    return (
      <div>
        {selectedPost ? renderPost(selectedPost) : <h1>Carregando</h1> }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedPost: state.selectedPost
  }
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);