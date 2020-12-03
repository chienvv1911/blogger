import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PostDetailPage from './pages/PostDetailPage'
import PostCreatePage from './pages/PostCreatePage'


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Switch>
            <Route path="/" component={HomePage} exact/>          
            <Route path="/posts/:id" component={PostDetailPage} exact />
            <Route path="/admin/posts/create" component={PostCreatePage} exact/>
          </Switch>
          
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
