import React from 'react';
import './custom.css';
import ServiceCard from '../component/ServiceCard';
import serviceData from '../static/jsonData';
import Skills from '../component/Skills';
import { description } from '../static/jsonData';
import me from '../static/img/Me.png'
export default function About() {

  const service = () => {
    if(serviceData){
      let serviceCount = serviceData.length;
      return (serviceData.map( service => {
        return (
          <div className={`col-sm-${12/serviceCount}`}>
            <ServiceCard title={service.title} icon = {service.icon} contents = {service.content}/>
          </div>
        )
      }))
    }
    return {}
  }

  return (
    <div className="container">
      <div className="row">
        <div className="about-image col-md-5">
          <img style={{width : "100%"}} src={me} alt="MyImage" />
        </div>
        <div className="about-description col-md-7">
          <h3>Hello, I am Wang Xiao</h3>
          <p>{description.content}</p>
          <div className="span"><i className="fas fa-male" style={{fontSize:"18px"}}></i><label>WangXiao</label></div>
          <div className="span"><i className="fab fa-skype" style={{fontSize:"18px"}}></i><label>live:.cid.d50b5899ca41c99b</label></div>
          <div className="span"><i className="fas fa-envelope" style={{fontSize:"18px"}}></i><label>wxiao1214@gmail.com</label></div>
          <div className="span"><i className="fas fa-map-marker-alt" style={{fontSize:"18px"}}></i><label>ShenYang,&nbsp;China</label></div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h3>MY SERVICES</h3>
        </div>
        {serviceData && service()}
      </div>
      <div className="row">
        <div className="col-12">
          <h3>MY SKILLS</h3>
        </div>
        <Skills />
      </div>
    </div>
  )
}
