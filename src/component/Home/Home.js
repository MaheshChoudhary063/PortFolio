// import React from 'react'
// import './Home.css'
// import { Link } from 'react-scroll'
// import imgg from '../../assests/img.png'
// const Home = () => {
//   return (
//         <section id='Home'>
//             <div className='home'>
//                 <span className='hello'>Hello,</span>
//                 <span className='text'>I'm <span className='name'>Mahesh</span><br/>Software Engineer</span>
//                 <p className='textp'>As a MERN stack developer, I specialize in building user-friendly web applications <br/> tailored to meet client requirements</p>
//                 <Link><button className='resume'>Resume</button></Link>
             


//             </div>
//             <img src={imgg} alt='Photo' className='img'/>
//         </section>

//   )
// }

// export default Home

import React from 'react'
import './Home.css'
import { Link } from 'react-scroll'
// import imgg from '../../assests/img.png'
import imgg from '../../assests/Me.png';

const Home = () => {
  return (
    <section id='Home'>
      <div className='home'>
        <span className='hello'>Hello,</span>
        <span className='text'>I'm <span className='name'>Mahesh</span><br/>Software Engineer</span>
        <p className='textp'>As a MERN stack developer, I specialize in building user-friendly web applications <br/> tailored to meet client requirements</p>
        <a
          href="https://drive.google.com/uc?export=download&id=1Gj4lKIs-SmfVTkEnh0DPlqkfCCoJimT3"
          target="_blank"
          rel="noopener noreferrer"
         
        >
          <button  className='resume'>Resume</button>
        </a>
      </div>
      <img src={imgg} alt='Photo' className='img'/>
    </section>
  )
}

export default Home
