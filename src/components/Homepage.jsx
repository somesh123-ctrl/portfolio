import React from 'react'
import demo from "./assets/img/demo.jpg";
import "./css/Homepage.scss";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import ParticlesBg from 'particles-bg'


function Homepage() {
    return (
       
      
      
       <div className="main">

                   <Slide left>

        <div className="rightside">
                <img className="img" src={demo}  alt=""/>
                <h2 >Somesh Shirpe</h2>
        </div>
<div className="leftside">

    <h4>Social Media Links Here ↓</h4>
<tr>
  <a href="">  <th ><FacebookIcon /></th></a>
  <a href="https://www.instagram.com/insta_gram_1_4/">   <th><InstagramIcon  className="insta"/></th></a>
  <a href="">  <th><TwitterIcon/></th></a>
  <a href="">  <th><LinkedInIcon/></th></a>
  <a href="https://github.com/somesh123-ctrl">  <th><GitHubIcon/></th></a>
  </tr>
  <div className="para">
        <h2>Hey! Somesh here.. I am Full stack web developer. This website depits all of the work that i have completed till now..🙂🙂🙂</h2>

        </div>
        </div>
    
</Slide>
        </div>
    )
}

export default Homepage
