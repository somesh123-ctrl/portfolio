import React from 'react'
import "./css/Project.scss"
import Slide from 'react-reveal/Slide';
import ParticlesBg from 'particles-bg'


function Projects() {
    return (

        <div className="bada1">
        <div className="bada">

            <Slide left>
              <tr>
          <th> <a className="m" href="/homepage">Github Links</a></th>
          <th> <a className="m" href="/homepage"> Demo Links</a></th>
           </tr>

            <tr>
          <th> <a className="g" href="/homepage">Puzzle app</a></th>
          <th> <a className="d" href="/homepage">Click here</a></th>
          
           </tr>
           <tr>
          <th> <a className="g" href="/homepage"> shopping app</a></th>
          <th> <a className="d" href="/homepage">Click here</a></th>
           </tr>


           <tr>
          <th> <a className="g" href="/homepage">music app</a></th>
          <th> <a className="d" href="/homepage">Click here</a></th>
           </tr>

           <tr>
          <th> <a className="g" href="/homepage">Grocerry  app</a></th>
          <th> <a className="d" href="/homepage">Click here</a></th>
           </tr>

           <tr>
          <th> <a className="g" href="/homepage">Ringtone  app</a></th>
          <th> <a className="d" href="/homepage">Click here</a></th>
           </tr>

           </Slide>
        </div>
        </div>
    )
}

export default Projects
