import React, { useState } from 'react'
import Projects from './Projects'



const Portfolio = () => {
  const [projects]  = useState([
    {
      name: 'Work Day Scheduler',
      descripiton: 'Created a workday scheduler using javascript and local storage',
      deployed: 'https://joelhiguera.github.io/week-5-work-scheduler/', //link to project
      repo: 'https://github.com/Joelhiguera/week-5-work-scheduler',
      image: 'pcimage1.jpg',
    },
    {
      name: 'Quiz App',
      descripiton: 'Created a quiz application using javascript',
      deployed: 'https://joelhiguera.github.io/Quiz-Challenge/', //link to project
      repo: 'https://github.com/Joelhiguera/Quiz-Challenge',
      image: 'image3.jpg',
    },
    {
      name: 'Weather App',
      descripiton: 'Created a weather app using javascirpt',
      deployed: 'https://joelhiguera.github.io/week6_Weather_Dashboard_Challenge/', //link to project
      repo: 'https://github.com/Joelhiguera/week6_Weather_Dashboard_Challenge',
      image: 'image6.jpg',
    },
    {
      name: 'password Generator',
      descripiton: 'Created a password generator using javascript',
      deployed: 'https://joelhiguera.github.io/Password-Generator/', //link to project
      repo: 'https://github.com/Joelhiguera/Password-Generator',
      image: 'image4.jpg',
    },
    {
      name: 'Resume Builder',
      descripiton: 'Collaberated on a resume generater website',
      deployed: 'https://stunning-chainsaw.herokuapp.com/', //link to project
      repo: 'https://github.com/LimeRicky84/stunning-chainsaw',
      image: 'image2.jpg',
    },
    {
      name: 'Note Taker App',
      descripiton: 'Note taking application',
      deployed: 'https://bootcamp-note-taker11.herokuapp.com/', //link to project
      repo: 'https://github.com/Joelhiguera/Week11_Note_Taker',
      image: 'notes.jpg',
    },
  ])
  return(
    <>
      <div className='projectPage'>
        <div className='projectTiles'>
        {projects.map(project => (
          <Projects  project={project} 
          key={project.name}>

          </Projects>
        ))}
        </div>
      </div>
    </>
  )
}

export default Portfolio

