import React, { Component } from 'react'
import Image from 'react-image-resizer'
import SkillData from '../Data/skills'
import './Styles/SkillListStyles.css'

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
          <div className='skill-wrapper'>
            <div className='skill-logo'>
              <Image src={skillInfo.logoURL} height={180} width={180}/>
            </div>
            <div className="skill-text">
              <h1 className="skill-title">{skillInfo.skill}</h1>
              <p className="skill-description">{skillInfo.experience}</p>
            </div>
          </div>
        ))
    })
  }

  render() {
    return (
      <div>
        {this.state.SkillListArr}
      </div>
    )
  }
}
