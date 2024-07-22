import React from "react";
import  "./Skills.css";
import java from '../../assests/Javalogo.jpeg'
import javaSccript from '../../assests/JavaScriptLogo.png'
import python from '../../assests/pythonlogo.png';
import MYSQL from '../../assests/mysqllogo.png';
import REACT from '../../assests/reactlogo.png';
import REDX from '../../assests/ReduxLogo.jpeg';
import NODEJS from '../../assests/nodejslogo.png';
import EXPRSSS from '../../assests/expreesjslogo.png';
import MongoDBB from '../../assests/mongologo.jpg';
import HTML5 from '../../assests/html5-logo.png';
import CSS3 from '../../assests/CSS3.png';
import dEVOPS from '../../assests/devopsLogo.png';



const Skills = () => {
  return (
    <div>
        <section id='skill'>
            <span className='SkillTittle'>What I do</span>
            <span className='SkillPar'>Showcasing Measurable Proficiency: Highlighting Specific, Teachable Abilities and Quantifiable Knowledge in my Portfolio.</span>
                <div className='skillBar'>
                    <div className='bar'>
                    <img src={java} alt='photo' className='Skillimg'/>
                    <div className='Skilltext'>
                        <h2>Java</h2>
                    </div>
                    </div>

                    <div className='bar'>
                    <img src={javaSccript} alt='photo' className='Skillimg'/>
                    <div className='Skilltext'>
                        <h2>JavaScript</h2>
                    </div>
                    </div>

                    <div className='bar'>
                    <img src={python} alt='photo' className='Skillimg'/>
                    <div className='Skilltext'>
                        <h2>Python</h2>
                    </div>
                    </div>

                    <div className='bar'>
                    <img src={MYSQL} alt='photo' className='Skillimg'/>
                    <div className='Skilltext'>
                        <h2>MySQL</h2>
                    </div>
                    </div>
                    <div className='bar'>
                    <img src={REACT} alt='photo' className='Skillimg'/>
                    <div className='Skilltext'>
                        <h2>React.js</h2>
                    </div>
                    </div>
                    <div className='bar'>
                    <img src={NODEJS} alt='photo' className='Skillimg'/>
                    <div className='Skilltext'>
                        <h2>Node.js</h2>
                    </div>
                    </div>
                    <div className='bar'>
                    <img src={EXPRSSS} alt='photo' className='Skillimg'/>
                    <div className='Skilltext'>
                        <h2>Express.js</h2>
                    </div>
                    </div>
                    <div className='bar'>
                    <img src={MongoDBB} alt='photo' className='Skillimg'/>
                    <div className='Skilltext'>
                        <h2>MongoDB</h2>
                    </div>
                    </div>
                    <div className='bar'>
                    <img src={REDX} alt='photo' className='Skillimg'/>
                    <div className='Skilltext'>
                        <h2>Redux</h2>
                    </div>
                    </div>
                    <div className='bar'>
                    <img src={HTML5} alt='photo' className='Skillimg'/>
                    <div className='Skilltext'>
                        <h2>HTML5</h2>
                    </div>
                    </div>
                    <div className='bar'>
                    <img src={CSS3} alt='photo' className='Skillimg'/>
                    <div className='Skilltext'>
                        <h2>CSS3</h2>
                    </div>
                    </div>
                    <div className='bar'>
                    <img src={dEVOPS} alt='photo' className='Skillimg'/>
                    <div className='Skilltext'>
                        <h2>Docker</h2>
                    </div>
                    </div>
                </div>
        </section>
    </div>
  )
}

export default Skills

