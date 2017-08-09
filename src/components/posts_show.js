import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params; //match.params provided by react-router. params holds all wild card values in url. matching id to :id wild card in url
        this.props.fetchPost(id);
    }

    render() {
        return (
            <div>
                Posts Show
            </div>
        );
    }
}

//ownProps = the props object that is headed to the re-rendered PostsShow component
function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };

}

export default connect(mapStateToProps, { fetchPost })(PostsShow);