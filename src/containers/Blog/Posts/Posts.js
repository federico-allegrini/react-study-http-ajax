import React, { Component } from "react";
import { Route } from 'react-router-dom'
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import FullPost from '../FullPost/FullPost'
import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return { ...post, author: "Frid" };
        });
        this.setState({ posts: updatedPosts });
        //   console.log(response);
      })
      .catch((error) => {
        console.log("[Blog.js] " + error);
        // this.setState({ error: true });
      });
  }

  postSelectedHandler = (id) => {
    // this.props.history.push({ pathname: '/posts/' + id })
    this.props.history.push('/posts/' + id)
  };
  render() {
    let posts = (
      <p style={{ textAlign: "center", color: "red" }}>
        Something went wrong...
      </p>
    );
    if (!this.state.error) {
      posts = this.state.posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)}
        />
      ));
    }
    return <div>
      <section className="Posts">{posts}</section>
      <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
    </div>;
  }
}

export default Posts;
