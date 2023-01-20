import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import {  NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="nav-bar">
     
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink 
        activeclassname="active" 
        className="about-link" 
        to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="mywork-link"
          to="myworklist"
          >
            <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
        </NavLink>
       

      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/michael-means-340240113/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/mmeans51"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar