import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
componentDidMount() {
    this.props.fetchPosts();
}

    render() {
        return (
            <div>
                Posts Index 
            </div>
        );
    }
}

//there is null below as first argument because we aren't passing in mapStateToProps function
export default connect(null, { fetchPosts })(PostsIndex);