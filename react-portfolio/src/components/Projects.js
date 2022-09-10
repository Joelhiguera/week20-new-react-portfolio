import React from 'react';
import GithubIcon from '@material-ui/icons/GitHub'


const Project = ({project}) => {
  const {name, description, deployed, repo, image} = project
  return(
    <div className='projectContainer' key={name}>
      <img className='projectImg' src={require(`../assets/projects/${image}`)} alt={name}></img>
        
        <div className='textBlock'>

          <h3 className='projectLinks'>
            <a className='' href={deployed}>{name}</a>
            {' '}
            </h3>

            <h2 className='projectLinks' >
              <a className='' href={repo}> 
              <GithubIcon />
              </a>
            </h2>
            
          
          <p>{description}</p>
        </div>

    </div>
  
  )
}

export default Project