import React from 'react'
import './Project.css'
import project1 from '../../assests/project1.png'
import Project2 from '../../assests/project3.jpeg'
import project3 from '../../assests/Prodect2.png';

const Project = () => {
  return (
    <div >
        <section id='project'>
            <h2 className='projectTitle'>My Project</h2>
            <span className='projectP'>Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`</span>
            <div className='projectDiv'>
            <div className='projectt'>
                <img src={project1} alt='shopswap' className='projectImg'/>
                <h1>E-Commerce</h1>
                <p>The e-commerce website is <br/>designed with a focus on <br/> user-friendly product management. </p> 
                <a
                  href="https://github.com/MaheshChoudhary063/ShopSwap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <button className='projectB'>See Project</button>  </a>               
            </div>
            <div className='projectt'>
                <img src={project3} alt='shopswap' className='projectImg'/>
                <h1>Pig Game</h1>
                <p>The Pig game is a simple dice game where players take turns rolling a standard <br/> six-sided die to accumulate points.  </p>
                <a
                  href="https://github.com/MaheshChoudhary063/Ludo-Game"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <button className='projectB'>See Project</button>    </a>              
            </div>
            <div className='projectt'>
                <img src={Project2} alt='shopswap' className='projectImg'/>
                <h1>EarBuds</h1>
                <p>The earbud website is a user-centric platform designed to showcase <br/> and facilitate the purchase of earphones</p>                    
                <a
                  href="https://github.com/MaheshChoudhary063/EarTrove-"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <button className='projectB'>See Project</button></a>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Project