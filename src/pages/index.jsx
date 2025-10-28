
import Layout from "./Layout.jsx";

import Home from "./Home";

import Blog from "./Blog";

import BlogPost from "./BlogPost";

import Testimonials from "./Testimonials";

import About from "./About";

import Contact from "./Contact";

import Services from "./Services";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    Blog: Blog,
    
    BlogPost: BlogPost,
    
    Testimonials: Testimonials,
    
    About: About,
    
    Contact: Contact,
    
    Services: Services,
    
}


function _getCurrentPage(url) {
  if (url.endsWith('/')) url = url.slice(0, -1);
  let urlLastPart = url.split('/').pop();
  if (urlLastPart.includes('?')) urlLastPart = urlLastPart.split('?')[0];
  const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
  return pageName || Object.keys(PAGES)[0];
}


// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.hash || location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/home" element={<Home />} />
                
                <Route path="/blog" element={<Blog />} />
                
                <Route path="/blogPost" element={<BlogPost />} />
                
                <Route path="/testimonials" element={<Testimonials />} />
                
                <Route path="/about" element={<About />} />
                
                <Route path="/contact" element={<Contact />} />
                
                <Route path="/services" element={<Services />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}