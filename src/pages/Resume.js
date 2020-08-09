import React from 'react';
import History from '../component/History';
import { experiments } from '../static/jsonData';

export default function Resume() {

  const history = () => {
    return experiments.experiments.map(experiment => {
      return (
        <History history = {experiment}/>
      )
    });
  }

  const education = () => {
    return experiments.education.map(history => {
      return (
        <History history = {history}/>
      )
    })
  } 

  return (
    <div className="container">
      <div className="row">
        <div className = "col-12" style={{textAlign:"center"}}>
          <h4 style = {{ fontWeight:"600", fontSize:"30px"}}>EXPERIMENT & EDUCATION</h4>
        </div>
        <div className ="col-sm-6">
          <div className ="education">
            <div className="education-icon">
              <i className="fa fa-suitcase"></i>
            </div>
            { history() }
          </div>
        </div>
        <div className ="col-sm-6">
          <div className="education">
            <div className="education-icon">
              <i className="fa fa-graduation-cap"></i>
            </div>
            { education() }
          </div>
        </div>        
      </div>
    </div>
  )
}
