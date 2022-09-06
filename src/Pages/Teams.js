import React, { Component } from 'react'
import './../Component/css/team.css';
import { Row } from 'reactstrap';
import FAQ from '../Component/Footer.js'
import Ankur from "../Assets/img/Ankur Gupta _ Lead.jpg";
import NavBarcomp from "../Component/NavBar";
import Sir from "../Assets/img/sanjaysir.JPG";
export default class Teams extends Component {

    

  render() {
    const GDSCLead = [
      {
      name: "Ankur Gupta",
      role: "GDSC Lead",
      img: Ankur,
    }
  ];
    const Leads= [
      {
        name:"Rajat Bhaskare",
        role:'Tech Team Lead',
        img: require("../Assets/img/Rajat Bhaskare - Tech Team Lead.png"),
      },
      {
        name:"Srajal Sahu",
        role:'Design Team Lead',
        img: require("../Assets/img/srajal.jpg"),
        
      },{
        name:"Abhinav badge ",
        role:'Content Lead',
        img: require("../Assets/img/Abhinav Bagde - Content Lead.jpg"),
    
        
      }
      ,
      {
        name:"Atharva J V Mathur ",
        role:'Event and Outreach Co-Lead',
        img: require("../Assets/img/Atharva J V Mathur _ Event and Outreach Lead.jpg"),
      },
      {
        name:"Tanmay Rajatwat ",
        role:'Event and Outreach Co-Lead',
        img: require("../Assets/img/Tanmay Rajawat - Co-lead event management.jpg"),
        
      },
      
      

      ]
    const teachteam=[
      {
        name:"Satyam Sharma",
        role:'Web Lead',
        img:require("../Assets/img/ss.jpeg"),
      },
      {
        name:"Pulkit Dubey",
        role:'App Lead',
        img:require("../Assets/img/Pulkit Dubey - App Lead.jpg"),

      },
      
      {
        name:"Prakrti Mankar",
        role:'Women In Tech',
        img:require("../Assets/img/Prakrti Mankar _ Women in Tech.jpg"),
      },
      {
        name:"Abhishek Malviya",
        role:'ML/Cloud',
        img:require("../Assets/img/Abhishek Malviya _ Ml _ Cloud lead.jpg"),

      },
      {
        name:"Aryan Singh",
        role:'Open Source development',
        img:require("../Assets/img/Aryan Singh _ Open Source Lead.jpg")
      }
      ,
      {
        name:"Abhishek Singh Lodhi",
        role:'UI/UX',
        img:require("../Assets/img/Abhishek Singh Lodhi _ UI_UX Lead.png"),

      },
    ]
    const designandcontent=[
      {
        name:"Sumit Yadav",
        role:'Design',
        img:require("../Assets/img/Sumit Yadav - Graphic designer and Video Editor.jpg"),
      },
      {
        name:"Aastha Koserwal",
        role:'Content and Marketing',
        img:require("../Assets/img/Aastha Koserwal - Content and Marketing Lead.jpg"),
      },
      {
        name:"Pratishtha Tiwari",
        role:'Content and Marketing',
        img:require("../Assets/img/Pratishtha Tiwari - Content and Marketin.jpg"),
      },
    ];

    return (
      <div className='team'>
        <NavBarcomp/>
        
        <div >
          {/*left right section */}
          <div className='teamlanding'>

            

          <div class="container">
        <div class="row d-flex align-items-center justify-content-center">

              <div class="col-md-6" id="home-img"></div>
              <div class="col-md-6  text-center titletean" id="home-content ">
                <h1 className='first-title'>The<br/>
                   <span className='G'>T</span>
                   <span className='D'>E</span>
                   <span className='S'>A</span>
                   <span className='C'>M</span>
                </h1>
                <h2><b>Presenting board of 2022-2023</b></h2>
                <div>
                </div>
              </div>
            
        </div>
     </div>






          </div>
        </div>
        {/*team section */}
        
        {/*team section */}
        <div className='container'>
        </div>
        <div className='Heading text-center mt-5'>
          <h1>Faculty Coordinator</h1>
        </div>
        <div className="speakersCardContainer mt-5">
          <div class="speakerCard">
            <div style={{height: "40px"}}>
              <img
                class="speakerImage"
                alt="Nikita Gandhi"
                src={Sir}
              />
            </div>
            <h5 class="MuiTypography-root mt-5 jss7 MuiTypography-h5 MuiTypography-alignCenter">
              Sanjay Kumar Sharma
            </h5>
            <span
              class="MuiTypography-root mt-5 jss7 MuiTypography-caption MuiTypography-alignCenter"
              sx="[object Object]"
            >
              Faculty Coordinator
            </span>
            
            <div class="MuiCardActions-root MuiCardActions-spacing">
              <a
                class="MuiButtonBase-root MuiIconButton-root"
                tabindex="0"
                aria-disabled="false"
                href="https://www.linkedin.com/in/nikita-gandhi01"
                target="_blank"
                rel="noopener"
              >
                <span class="MuiIconButton-label">
                  <svg
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                  </svg>
                </span>
                <span class="MuiTouchRipple-root"></span>
              </a>
              <a
                class="MuiButtonBase-root MuiIconButton-root"
                tabindex="0"
                aria-disabled="false"
                href="https://twitter.com/Nikkitagandhi"
                target="_blank"
                rel="noopener"
              >
                <span class="MuiIconButton-label">
                  <svg
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                  </svg>
                </span>
                <span class="MuiTouchRipple-root"></span>
              </a>
            </div>
          </div>
         
         
        </div>
        {/* GDSC Lead */}
        <div className='Heading text-center '>
          <h1>GDSC Lead</h1>
        </div>
        <div className="speakersCardContainer mt-5">
          <div class="speakerCard">
            <div style={{height: "40px"}}>
              <img
                class="speakerImage"
                alt="Nikita Gandhi"
                src={Ankur}
              />
            </div>
            <h5 class="MuiTypography-root mt-5 jss7 MuiTypography-h4 team-heading MuiTypography-alignCenter">
              Ankur Gupta
            </h5>
            <span
              class="MuiTypography-root mt-2 jss7 MuiTypography-caption team-dept MuiTypography-alignCenter"
              sx="[object Object]"
            >
              GDSC Lead
            </span>
            
            <div class="MuiCardActions-root MuiCardActions-spacing">
              <a
                class="MuiButtonBase-root MuiIconButton-root"
                tabindex="0"
                aria-disabled="false"
                href="https://www.linkedin.com/in/nikita-gandhi01"
                target="_blank"
                rel="noopener"
              >
                <span class="MuiIconButton-label">
                  <svg
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                  </svg>
                </span>
                <span class="MuiTouchRipple-root"></span>
              </a>
              <a
                class="MuiButtonBase-root MuiIconButton-root"
                tabindex="0"
                aria-disabled="false"
                href="https://twitter.com/Nikkitagandhi"
                target="_blank"
                rel="noopener"
              >
                <span class="MuiIconButton-label">
                  <svg
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                  </svg>
                </span>
                <span class="MuiTouchRipple-root"></span>
              </a>
            </div>
          </div>
         
         
        </div>
        {/* Leads */}
        <div className='Heading text-center '>
          <h1>Leads</h1>
        </div>
        <div className="speakersCardContainer mt-5 col-md-9">
        {Leads.map((speaker, index) => (

          <div class="speakerCard">
            
          <div style={{height: "40px"}}>
            <img
              class="speakerImage"
              alt="Nikita Gandhi"
              src={speaker.img}
            />
          </div>
          
          <h5 class="MuiTypography-root jss7 mt-5 team-heading MuiTypography-h5 MuiTypography-alignCenter">
            {speaker.name}
          </h5>
          <span
            class="MuiTypography-root jss7 mt-5   MuiTypography-caption MuiTypography-alignCenter"
            sx="[object Object]"
          >
            {speaker.role}
          </span>
          <br />
          <p class="MuiTypography-root jss7 MuiTypography-body1 MuiTypography-alignCenter">
          
          </p>
          <div class="MuiCardActions-root MuiCardActions-spacing">
            <a
              class="MuiButtonBase-root MuiIconButton-root"
              tabindex="0"
              aria-disabled="false"
              href="https://www.linkedin.com/in/nikita-gandhi01"
              target="_blank"
              rel="noopener"
            >
              <span class="MuiIconButton-label">
                <svg
                  class="MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                </svg>
              </span>
              <span class="MuiTouchRipple-root"></span>
            </a>
            <a
              class="MuiButtonBase-root MuiIconButton-root"
              tabindex="0"
              aria-disabled="false"
              href="https://twitter.com/Nikkitagandhi"
              target="_blank"
              rel="noopener"
            >
              <span class="MuiIconButton-label">
                <svg
                  class="MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                </svg>
              </span>
              <span class="MuiTouchRipple-root"></span>
            </a>
          </div>
        </div>
        
        ))}
         
         
        </div>
        {/*---------------------TechTeam---------------------*/}
        <div className='Heading text-center '>
          <h1>Tech Team</h1>
        </div>
        <div className="speakersCardContainer mt-5 col-md-9">
        {teachteam.map((speaker, index) => (

          <div class="speakerCard">
            
          <div style={{height: "40px"}}>
            <img
              class="speakerImage"
              alt="Nikita Gandhi"
              src={speaker.img}
            />
          </div>
          
          <h5 class="MuiTypography-root jss7 mt-5 team-heading MuiTypography-h5 MuiTypography-alignCenter">
            {speaker.name}
          </h5>
          <span
            class="MuiTypography-root jss7 mt-5 MuiTypography-caption MuiTypography-alignCenter"
            sx="[object Object]"
          >
            {speaker.role}
          </span>
          <br />
          <p class="MuiTypography-root jss7 MuiTypography-body1 MuiTypography-alignCenter">
          
          </p>
          <div class="MuiCardActions-root MuiCardActions-spacing">
            <a
              class="MuiButtonBase-root MuiIconButton-root"
              tabindex="0"
              aria-disabled="false"
              href="https://www.linkedin.com/in/nikita-gandhi01"
              target="_blank"
              rel="noopener"
            >
              <span class="MuiIconButton-label">
                <svg
                  class="MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                </svg>
              </span>
              <span class="MuiTouchRipple-root"></span>
            </a>
            <a
              class="MuiButtonBase-root MuiIconButton-root"
              tabindex="0"
              aria-disabled="false"
              href="https://twitter.com/Nikkitagandhi"
              target="_blank"
              rel="noopener"
            >
              <span class="MuiIconButton-label">
                <svg
                  class="MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                </svg>
              </span>
              <span class="MuiTouchRipple-root"></span>
            </a>
          </div>
        </div>
        
        ))}
         
         
        </div>
        {/*---------------------DesignandcontentTeam---------------------*/}
        <div className='Heading text-center '>
          <h1>Design and Content Team</h1>
        </div>
        <div className="speakersCardContainer mt-5 col-md-9">
        {designandcontent.map((speaker, index) => (

          <div class="speakerCard">
            
          <div style={{height: "40px"}}>
            <img
              class="speakerImage"
              alt="Nikita Gandhi"
              src={speaker.img}
            />
          </div>
          
          <h5 class="MuiTypography-root jss7 team-heading mt-5 MuiTypography-h5 MuiTypography-alignCenter">
            {speaker.name}
          </h5>
          <span
            class="MuiTypography-root jss7 mt-5 MuiTypography-caption MuiTypography-alignCenter"
            sx="[object Object]"
          >
            {speaker.role}
          </span>
          <br />
          <p class="MuiTypography-root jss7 MuiTypography-body1 MuiTypography-alignCenter">
          
          </p>
          <div class="MuiCardActions-root MuiCardActions-spacing">
            <a
              class="MuiButtonBase-root MuiIconButton-root"
              tabindex="0"
              aria-disabled="false"
              href="https://www.linkedin.com/in/nikita-gandhi01"
              target="_blank"
              rel="noopener"
            >
              <span class="MuiIconButton-label">
                <svg
                  class="MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                </svg>
              </span>
              <span class="MuiTouchRipple-root"></span>
            </a>
            <a
              class="MuiButtonBase-root MuiIconButton-root"
              tabindex="0"
              aria-disabled="false"
              href="https://twitter.com/Nikkitagandhi"
              target="_blank"
              rel="noopener"
            >
              <span class="MuiIconButton-label">
                <svg
                  class="MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                </svg>
              </span>
              <span class="MuiTouchRipple-root"></span>
            </a>
          </div>
        </div>
        
        ))}
         
         
        </div>

        </div>

      
    )
  }
}
