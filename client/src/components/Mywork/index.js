import "./Mywork.css"

const Mywork = ({img, link}) => {
    return (
        <div className="work">
            <div className="mw-browser">
                <div className="mw-circle"></div>
                <div className="mw-circle"></div>
                <div className="mw-circle"></div>
            </div>
            
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt=" " className="w-img" />
                </a>
                
        </div>
    );
};

export default Mywork