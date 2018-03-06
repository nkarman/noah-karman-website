import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import Image from 'react-image-resizer'
import SkillData from '../Data/skills'
import './Styles/SkillListStyles.css'
import '../Themes/Animations/hover.css'
import 'animate.css/animate.min.css'


export default class SkillList extends Component {

  constructor (props) {
    super(props)
    this.state = {
      SkillListArr: []
    }
  }

  componentWillMount() {

    this.mapList()
  }

  mapList = () => {
    this.setState({
      SkillListArr:
        SkillData.map(skillInfo => (
          <ScrollAnimation animateIn='fadeIn' duration='0.5'>
            <div className='skill-wrapper'>
            {/* <div className='skill-wrapper hvr-forward'> */}
              <div className='skill-logo'>
                <Image src={skillInfo.logoURL} height={180} width={180}/>
              </div>
              <div className="skill-text">
                <h1 className="skill-title">{skillInfo.skill}</h1>
                <p className="skill-description">{skillInfo.experience}</p>
              </div>
            </div>
          </ScrollAnimation>
        ))
    })
  }

  render() {
    return (
      <div className='skill-container'>
        {this.state.SkillListArr}
      </div>
    )
  }
}
