import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PostDetailPage from './pages/PostDetailPage'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path="/" component={HomePage} exact/>          
          <Route path="/post/:id" component={PostDetailPage} exact/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
