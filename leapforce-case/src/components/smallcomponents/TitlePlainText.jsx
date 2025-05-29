import "../css/TitlePlainText.css"

const TitlePlainText = ({title, text}) => {
    return (
        <div className="title-plaintext">
            <h4 className="text-wrapper">{title}</h4>

            <p className="plain-text">
                {text}
            </p>
        </div>
    )
}

export default TitlePlainText