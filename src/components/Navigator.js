import React, { useEffect } from 'react';

const Navigator = (props) => {
  const { pages = [], setCurrentPage, currentPage } = props
  return (
    <nav>
      <ul className='navList'>
        {pages.map(page  => (
        <li className={`${currentPage.name === page.name && 'active'} `} key={page.name}><span onClick={() => setCurrentPage(page)}>{page.name}</span></li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigator