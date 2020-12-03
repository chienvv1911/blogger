import React, { Component } from 'react'
import PostForm from '../components/post/PostForm';

export default class PostCreatePage extends Component {
    render() {
        return (
            <div>
                <h1>Create Post</h1>
                <PostForm />
            </div>
        )
    }
}

