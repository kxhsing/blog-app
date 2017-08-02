import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        console.log(this.props.posts);
        //using lodash's map function since it is object we are looping through, not array
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                {post.title}
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

//there is null below as first argument because we aren't passing in mapStateToProps function
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);