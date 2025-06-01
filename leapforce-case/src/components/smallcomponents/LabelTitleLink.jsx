import ArrowIcon from "./ArrowIcon"
import "../css/LabelTitleLink.css"
import SvgArrow from "./SvgArrow"

const LabelTitleLink = ({label, titleStart, callToAction, titleEnd, bodyText, buttonText}) => {
    return (
        <div className="label-title-link">
            <div className="label-title">
                <label className="label">{label}</label>
                <h2 className="title">
                    {titleStart} <br></br><span className="call-to-action">{callToAction} </span>{titleEnd}
                </h2>

            </div>
            <p className="body-text">{bodyText}</p>
            <button className="button">{buttonText} 
                <span className="svg-wrapper">
                    <SvgArrow/>
                </span>
            </button>
        </div>
    )
}

export default LabelTitleLink