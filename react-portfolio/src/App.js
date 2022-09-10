import React, { useState } from 'react';
import Page from './components/Page'
import Header from './components/Header'
import Aboutme from './components/Aboutme';
import Footer from './components/Footer'
import Contact from './components/Contact';
import Navigator from './components/Navigator';

function App() {
  const [pages] = useState([
    {name: 'About Me'},
    {name: 'Portfolio'},
    {name: 'Contact'}, 
    {name: 'Resume'},
  ])
  const [currentPage, setCurrentPage] = useState(pages[0])
  return (
    <>
      <Header>
        <Navigator 
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          >
        </Navigator>
        </Header>
        <main>
          <Page currentPage={currentPage}></Page>
        </main>

      <Footer />
      
    </>
  );
}

export default App;
