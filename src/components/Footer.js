import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GithubIcon from '@material-ui/icons/GitHub'
import FacebookIcon from '@material-ui/icons/Facebook'
const Footer = () => {
  return (
    <div className="footer">
      <div className='socialMedia'>

        <a href="https://www.linkedin.com/in/joel-higuera-877b74236/">
          <LinkedInIcon />
        </a>

        <a href='https://github.com/joelhiguera'>
          <GithubIcon />
        </a>

        <a href='https://facebook.com'>
          <FacebookIcon />
        </a>
      
      </div>
     
    </div>
  )
}

export default Footer