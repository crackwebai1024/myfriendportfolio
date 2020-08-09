import React from 'react'
import Skillbar from './Skillbar';
import { skills } from '../static/jsonData';

export default function Skills() {
  const personalSkills = () => {
    let personalSkills = skills.personal;
    return personalSkills.map(personalSkill => {
      return (
        <Skillbar title={personalSkill.title} percent = {personalSkill.percentage}/>
      )
    })
  }
  const professionalSkills = () => {
    let professionalSkills = skills.professional;
    return professionalSkills.map(professionalSkill => {
      return (
        <Skillbar title={professionalSkill.title} percent = {professionalSkill.percentage}/>
      )
    })
  }
  return (
    <div className="skill-container row">
      <div className="col-sm-6">
        <div className="skill-selector">
          <h3><i class="fas fa-address-card"></i>Personal Skills</h3>
        </div>
        {personalSkills()}
      </div>  
      <div className="col-sm-6">
      <div className="skill-selector">
          <h3><i class="fas fa-database"></i>Professional Skills</h3>
        </div>
        {professionalSkills()}
      </div>            
    </div>
  )
}
