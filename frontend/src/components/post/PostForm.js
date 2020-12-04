import React, { Component } from "react";
import axios from "axios";
import sanitizeHtml from "sanitize-html";
import { Editor } from "@tinymce/tinymce-react";
class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
    };
  }

  componentDidMount() {
    let { match } = this.props;
    if (match && match.params && match.params.id) {
      axios
        .get(`/posts/${this.props.match.params.id}`)
        .then((post) => {
          this.setState({
            title: post.data.title,
            content: post.data.content,
          });
        })
        .catch((err) => console.error(err));
    }
  }

  handleEditorChange = (event, editor) => {
    this.setState({ content: event });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // sanitize data before setting state
    const sanitizedData = sanitizeHtml(this.state.content.trim());
    this.setState({ content: sanitizedData });

    const Blog = {
      title: this.state.title,
      content: sanitizedData,
    };
    let { match } = this.props;
    if (match && match.params && match.params.id) {
      axios
        .post(`/api/posts/edit/${match.params.id}`, Blog)
        .then((res) => (window.location = "/"))
        .catch((err) => console.log(err));
    } else {
      axios
        .post(`/api/posts/create/`, Blog)
        .then((res) => (window.location = "/"))
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <div className="new-post">
          <h1>Create New Blog Post</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="new-title">Title: </label>
              <input
                className="form-control new-title"
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                required
                placeholder="The Best Title"
              />
            </div>
            <div>
              <Editor
                initialValue="<p>This is the initial content of the editor</p>"
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    "codesample advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                  ],
                  toolbar:
                    "codesample | undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
                }}
                onEditorChange={this.handleEditorChange}
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="submit"
                value="Create Post"
                className="btn btn-outline-primary btn-lg"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PostForm;
