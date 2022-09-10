import React from 'react';
import Content from './Content'
import Contact from './Contact'
import Aboutme from './Aboutme';
import Portfolio from './Portfolio'
import Resume from './Resume'

const Page = ({currentPage}) => {
  const renderPage = () => {
    switch(currentPage.name) {
      case 'About Me':
        return <Aboutme />
        case 'Portfolio':
          return <Portfolio />
          case 'Contact':
            return <Contact />
            case 'Resume':
              return <Resume />
              default: 
              return 'About Me'
    }
  }
  return (
    <>
      <h2 className='navigator'>
        {currentPage.name}
      </h2>
      <div className='pageBody'>
        <Content>
          {renderPage()}
        </Content>
      </div>
    </>
  )
} 

export default Page;