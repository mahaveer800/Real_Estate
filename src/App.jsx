import React from 'react'

import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'
import Testmonial from './components/Testmonial'
import Contact from './components/Contact'
  import { ToastContainer} from 'react-toastify';
import Footer from './components/Footer'
  // import 'react-toastify/dist/ReactTostify.css';


const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer></ToastContainer>
    <Header/>
    <About></About>
    <Project></Project>
    <Testmonial></Testmonial>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  )
}

export default App