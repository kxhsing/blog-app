import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import { Link } from 'react-router-dom';


class PostsShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params; //match.params provided by react-router. params holds all wild card values in url. matching id to :id wild card in url
        this.props.fetchPost(id);
    }

    render() {
        const { post } = this.props;
        if (!post) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Link to="/">Back to Index</Link>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

//ownProps = the props object that is headed to the re-rendered PostsShow component
function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };

}

export default connect(mapStateToProps, { fetchPost })(PostsShow);