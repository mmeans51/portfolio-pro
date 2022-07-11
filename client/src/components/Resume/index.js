// import './index.scss'
import  Resume  from "../../assets/images/Michael_Means_Resume.PDF"


const MyResume = () => {
return (
    <div className='myresume' >
        <link className='resume' to="/">
            <img src={Resume} alt="resume"/>
        </link>
    </div>
)
};

export default MyResume