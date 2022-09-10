import React from 'react';


const Project = ({project}) => {
  const {name, description, deployed, repo, image} = project
  return(
    <div key={name}>
      <img src={require(`../assets/projects/${image}`)} alt={name}></img>
        <div>
          <h3>
            <a href={deployed}>{name}</a>
            {' '}
            <a href={repo}>Github</a>
          </h3>
          <p>{description}</p>
        </div>

    </div>
    
  )
}

export default Project