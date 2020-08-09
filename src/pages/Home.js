import React from 'react';
import './custom.css';

export default function Home() {
  return (
    <div className="row">
      <div className="home-info col-xl-7">
        <h3>Hello, My Name is </h3>
        <h1>Wang Xiao</h1>
        <h3>
          <i class="fas fa-check"></i>&nbsp;&nbsp;Front-End Developer
        </h3>
        <h3>
          <i class="fas fa-check"></i>&nbsp;&nbsp;Python Developer
        </h3>
        <h3>
          <i class="fas fa-check"></i>&nbsp;&nbsp;Browser Extension Developer
        </h3>                
      </div>
      <div className="home-right col-xl-5 col-md-0">
        
      </div>
    </div>
  )
}
