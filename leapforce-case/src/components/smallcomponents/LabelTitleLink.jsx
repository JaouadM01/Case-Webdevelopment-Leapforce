import ArrowIcon from "./ArrowIcon"
import "../css/LabelTitleLink.css"
import SvgArrow from "./SvgArrow"

const LabelTitleLink = () => {
    return (
        <div className="label-title-link">
            <div className="label-title">
                <label className="label">Label</label>
                <h2 className="title">
                    Mandatory title about the <br></br><span className="call-to-action">call-to-action </span>here
                </h2>

            </div>
            <p className="body-text">Optional body copy goes here.</p>
            <button className="button">Optional button 
                <span className="svg-wrapper">
                    <SvgArrow/>
                </span>
            </button>
        </div>
    )
}

export default LabelTitleLink