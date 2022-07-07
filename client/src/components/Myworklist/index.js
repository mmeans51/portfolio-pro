import "./index.scss"
import Mywork from "../Mywork/index"
import { Work } from "../../data"

const MyworkList = () => {
    return (
        <div className="mw">
            <div className="mw-text">
                <h1 className="mw-title">My Work</h1>
                <p className="mw-description">
                    Below you will see a few screen grabs of some projects i made or contributed too during the coding Boot camp. the images are link to the active webpage.
                    Also, head over to my git page at github.com/mmeans51 to see my other projects.
                </p>
            </div>
            <div className="mw-list">
                {Work.map((item) => (
                    <Mywork key={item.id} img={item.img} link={item.link} />
                ))}
              
            </div>
            
        </div>
    );
};

export default MyworkList