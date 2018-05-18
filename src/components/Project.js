import React, { Component } from 'react';
import toxic_comment from '../images/toxic_comment.png'
import foodpedia from '../images/foodpedia.png'

class Project extends Component {
    render() {
      return (
        <div className="Project section flex-container">
        <p> Here are my projects. 這是我的作品。</p>  
            <div className="item">
                <img src={toxic_comment} className="thumb"/>
                <div className="overlay">
                    <div className="text">
                        <h3>Kaggle- Toxic comment classification challenge</h3>
                        <p><a href="https://github.com/andrewhar/kaggle_toxic_comment" target="_blank" rel="noopener noreferrer">Repo  <i className="fa fa-external-link"></i></a></p>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={foodpedia} className="thumb"/>
                <div className="overlay">
                    <div className="text">
                        <h3>Android application- Foodpedia</h3>
                        <p><a href="https://github.com/andrewhar/foodpedia001" target="_blank" rel="noopener noreferrer">Repo  <i className="fa fa-external-link"></i></a></p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Project;