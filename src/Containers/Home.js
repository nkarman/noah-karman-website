import React, { Component } from 'react'
import profPic from '../Images/ProfPic.jpg'
import SkillList from '../Components/SkillList'
import '../Themes/Animations/hover.css'
import '../App.css';


export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={profPic} className="prof-pic hvr-grow" />
          <h1 className='heavy-title'>
            Noah Karman
          </h1>
          <h2>
            Software Developer
          </h2>
        </div>
        <h1 className='bio'>
          Versatile and creative software
          developer focused on Mobile and Web
          development. Passionate about technology,
          offering a balance of imagination and technical skill.
        </h1>
        <div className='home-card'>
          <div className="card-header-wrap">
            <h2 className='card-header'>The Toolbox.</h2>
          </div>
          <SkillList className='skill-list'/>
        </div>
      </div>
    );
  }
}
