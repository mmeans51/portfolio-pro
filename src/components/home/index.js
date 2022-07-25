import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['M', 'e', 'a', 'n', 's']
  const jobArray = [
    'W',
    'e',
    'b ',
    ' D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>M</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>c</span>
            <span className={`${letterClass} _14`}>h</span>
            <span className={`${letterClass} _14`}>a </span>
            <span className={`${letterClass} _14`}> e</span>
            <span className={`${letterClass} _14`}>l </span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Full Stack Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
       
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home