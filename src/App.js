import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import homeImage from './components/Routing/image/home.jpg';
import postImage from './components/Routing/image/post.jpg';
import contactImage from './components/Routing/image/contact.jpg';
import aboutImage from './components/Routing/image/about.jpg';
import Navbar from './components/Routing/Navbar';
import Header from './components/Routing/Header';
import Footer from './components/Routing/Footer';
import Home from './components/Routing/Home';
import Post from './components/Routing/Post';
import Contact from './components/Routing/Contact';
import About from './components/Routing/About';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/post" element={
              <>
                <Header title="Post page" img={postImage} />
                <Post />

              </>
            } />

            <Route path="/contact" element={
              <>
                <Header title="Contact page" img={contactImage} />
                <Contact />

              </>
            } />

            <Route path="/about" element={
              <>
                <Header title="About page" img={aboutImage} />
                <About />

              </>
            } />

            <Route path="/" element={
              <>
                <Header title="Home page" img={homeImage} />
                <Home />
              </>
            } />
          </Routes>

          <Footer />


        </Router>
      </>
    );
  }
}
