import "./css/CTA-card.css"
import ArrowIcon from './ArrowIcon.jsx'

const CTAcard = ({ imageSrc, title, text, alt }) => {
    return (
        <div className="image-cta">
            <img src={imageSrc} alt={alt} className="image" />
            <div className="gradient" />

            <div className="content">
                <div className="text">
                    <h4 className="title">{title}</h4>
                    <p className="description">
                        {text}
                    </p>
                </div>

                <button className="arrow-button-instance">
                    <ArrowIcon />
                </button>
            </div>
        </div>
    )
}

export default CTAcard

// voeg mogelijk hier proptypes toe