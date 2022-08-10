import './index.scss'
import   Resume   from "../../assets/images/Michael_Means_Resume-1.png"

import Loader from 'react-loaders'

const MyResume = () => {
return (
    <div className="a-aboutme">
              <img src={Resume} alt="" className="resume-img" />
              <div className="aboutme-text">
              <h4 className="codingtitle"> University of Texas Coding Certification</h4>
              <p className="codingcert"> description of coding certification here</p>
              </div>
          </div>
)
};
<Loader type="pacman" />

export default MyResume