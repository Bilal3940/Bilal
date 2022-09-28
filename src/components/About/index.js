import AnimatedLetters from '../AnimatedLetters'
import {
  faBootstrap,
  faCss3,
  faHtml5,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FloatingLettersTextBuilder } from 'react-animated-text-builders'
import { useState, useEffect } from 'react'
import image from '../../images/img-1.png'
import './index.scss'
const About = () => {
  const func_t = () => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
   return func_t()
  }, [])

  return (
    <main>
      <div className="container about-page">
        <h1>
          <AnimatedLetters
            strArray={['A', 'B', 'O', 'U', 'T', '', 'M', 'E']}
            letterClass={letterClass}
            idx={10}
          />
        </h1>
        <article className="review">
          {/* <div className="img-container">
            <img src={image} alt={'Bilal'} className="person-img" />
          </div> */}
          <p className="job">Web Developer</p>
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
          <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faBootstrap} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faPython} color="#EC4D28" />
            </div>
          </div>
        </div>
        </article>
      </div>
    </main>
  )
}
export default About
