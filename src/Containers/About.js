import React, { Component } from 'react'
import profPic from '../Images/ProfPic.jpg'
import SkillList from '../Components/SkillList'
import '../App.css';

export default class About extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={profPic} className="prof-pic" />
          <h1 className='heavy-title'>
            Noah Karman
          </h1>
          <h2>
            ABOUT
          </h2>
        </div>
      </div>
    );
  }
}
