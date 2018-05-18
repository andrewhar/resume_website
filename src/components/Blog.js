import React, { Component } from 'react';
import spider from '../images/spider.jpeg'

class Blog extends Component {
    render() {
      return (
        <div className="flex-container">
        <p> Here are my blog. 這是我的網誌。</p>  
        <div className="item">
            <img src={spider} className="thumb"/>
            <div className="blog-overlay">
              <div className="text">
                <h3>Scrapy tutorial</h3>
                <p><a href="https://medium.com/@andrew.hch/beginner-30-mins-shortcut-to-learn-how-to-scrap-website-in-python-using-scrapy-e9a75cc0622d" target="_blank" rel="noopener noreferrer">Read on Medium  <i className="fa fa-external-link"></i></a></p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Blog;