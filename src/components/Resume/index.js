import './index.scss'
import   Resume   from "../../assets/images/Michael_Means_Resume-1.png"

import Loader from 'react-loaders'

const MyResume = () => {
return (
    <div className='myresume' >
        <link className='resume' to="/">
            <img src={Resume} alt="resume"/>
        </link>
    </div>
)
};
<Loader type="pacman" />

export default MyResume