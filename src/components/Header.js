import React from 'react';

const Header = (props) => {
  return (
    <header>
      <h1>JOEL HIGUERA</h1>
      {props.children}
    </header>
  )
}

export default Header