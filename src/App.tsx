import { useState } from 'react'
import books from './data/data'
import './App.css'
import Viewer from './components/Viewer';
import ListGroup from './components/ListGroup';


// import { IBook } from './interfaces/IBook'


function App() {

  const [selectedIndex, setSelectedIndex]  = useState(0)

  return (
    <>
      <Viewer selectedBook={books[selectedIndex]} selectedIndex={selectedIndex}/>
      <ListGroup selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} books={books}/>
    </>
  )
}

export default App
