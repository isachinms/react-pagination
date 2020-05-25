import React from 'react';
import axios from 'axios'
import Post from './components/Post'
import Pagination from './components/Pagination'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      postPerPage: 5,
      currentPage: 1
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        this.setState({ posts: response.data })
      })
  }

  handlePageChange = (pageNo) => {
    this.setState({ currentPage: pageNo })
  }

  handlePrevPageChange = () => {
    this.setState((prevState) => {
      return {
        currentPage: prevState.currentPage - 1
      }
    })
  }

  handleNextPageChange = () => {
    this.setState((prevState) => {
      return {
        currentPage: prevState.currentPage + 1
      }
    })
  }

  render() {
    const { posts, currentPage, postPerPage } = this.state
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
    const totalPages = Math.ceil(posts.length / postPerPage)

    return (
      <div className="container">
        <h1 className="my-5 text-dark">Blog Posts</h1>
        <Post posts={currentPosts} />
        <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={this.handlePageChange} handlePrevPageChange={this.handlePrevPageChange} handleNextPageChange={this.handleNextPageChange} />
      </div>
    )
  }
}

export default App;
