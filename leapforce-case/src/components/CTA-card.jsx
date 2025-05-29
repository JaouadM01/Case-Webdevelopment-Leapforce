import "./css/CTA-card.css"
import ArrowButton from "./smallcomponents/ArrowButton"
import TitlePlainText from "./smallcomponents/TitlePlainText"

const CTAcard = ({ imageSrc, title, text, alt }) => {
    return (
        <div className="image-cta">
            <img src={imageSrc} alt={alt} className="image" />
            <div className="box">
            <div className="gradient" />

            <div className="frame">
                <TitlePlainText title={title} text={text}/>

                <ArrowButton />
            </div>
            </div>
            
        </div>
    )
}

export default CTAcard

// voeg mogelijk hier proptypes toe