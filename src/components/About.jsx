import React from 'react'
import "./css/About.scss"
import Slide from 'react-reveal/Slide';


const colors = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv8Nsdin9cNOymV2K0k7mICMf93WoOr0oCs_6XAWxJHaowFrydMdvOZVuO4_hmqa7XlGs&usqp=CAU",
 "https://techstory.in/wp-content/uploads/2021/05/1182202-bg-full-netflix-grid-v2.desktop.jpg",  
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwu2rjlSr1ZQ_6oL4RkNksd1vT2-5lQjY7fw&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhreHC3_G4YUsltED8nb2-_LoEhJSxPBJ5vg&usqp=CAU",

];

const studies=[
"https://lh3.googleusercontent.com/proxy/j-GjEje4A2rFeDri6r1N9a7GpwuRUnzSfG0zpT-OaRsYzv3GU8I16A-6J1nI6KgWq4x15h52fd-MbNpSFSWj009_BCHBOYjVG44TpE8-q7UPBQGyk_T0U-HBz308DjbWaM3asoosXf0GpQ",
"https://static.toiimg.com/thumb/msid-61475656,imgsize-1459559,width-400,resizemode-4/61475656.jpg",
"data:image/jpeg;base64,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",
];
const delay = 1000;




function About() {

    const [index, setIndex] = React.useState(0);
    const [studiesIndex, setstudiesIndex] = React.useState(0);


  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);

  React.useEffect(() => {
    setTimeout(
      () =>
        setstudiesIndex((prevstudiesIndex) =>
          prevstudiesIndex === studies.length - 1 ? 0 : prevstudiesIndex + 1
        ),
      delay
    );

    return () => {};
  }, [studiesIndex]);


    return (
      <div className="main1">
           <Slide left>
        <div className="main">
<h2>Studies :-</h2>
     <div className="box">
       

         <div className="slide-show">
         <div className="slideshow">
      <div className="slideshowSlider" style={{ transform: `translate3d(${-studiesIndex * 100}%, 0, 0)` }} >
       '
       ' {colors.map((backgroundImage, studiesIndex) => (
          <div className="slide"  key={studiesIndex} style={{'backgroundImage': `url(${studies[studiesIndex]})`}}          > 
            </div>
        ))}
      </div>
    </div>
         </div>
         <h3>title</h3>
     </div>



     <h2>Hobbies  :-</h2>


     <div className="box">
        

         <div className="slide-show">
         <div className="slideshow">
      <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} >
       '
       ' {colors.map((backgroundImage, index) => (
          <div className="slide"  key={index} style={{'backgroundImage': `url(${colors[index]})`}}          > 
            </div>
        ))}
      </div>
    </div>
         </div>
         <h3>title</h3>
     </div>
     <div className="box">
       

       <div className="slide-show">
       <div className="slideshow">
    <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} >
     '
     ' {colors.map((backgroundImage, index) => (
        <div className="slide"  key={index} style={{'backgroundImage': `url(${colors[index]})`}}          > 
          </div>
      ))}
    </div>
  </div>
       </div>
       <h3>title</h3>
   </div>









     <h2>Favourites :-</h2>
     <div className="box">
       

         <div className="slide-show">
         <div className="slideshow">
      <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} >
       '
       ' {colors.map((backgroundImage, index) => (
          <div className="slide"  key={index} style={{'backgroundImage': `url(${colors[index]})`}}          > 
            </div>
        ))}
      </div>
    </div>
         </div>
         <h3>title</h3>
     </div>


     
            
        </div>
        </Slide>
</div>
    )
}

export default About
