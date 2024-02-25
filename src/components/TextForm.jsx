import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const TextForm = (props) => {
    const [text, settext] = useState();
    const HandleOnChange = (event) => {
        console.log("On Change");
        settext(event.target.value)
    }
    const HandleOnClick = () => {
        console.log("Upper Case Clicked");
        let newText = text.toUpperCase();
        settext(newText);
    }
    return (
        <div>
            <h1>{props.title}</h1>
            <div className="form-group">
                {/* <label for="myBox">{props.title}</label> */}
                <textarea className="form-control" value={text} onChange={(event) => HandleOnChange(event)} id="myBox" rows="10" ></textarea>
            </div>
            <button className="btn btn-primary" onClick={() => HandleOnClick()}>To Upper</button>
        </div>
    )
}

TextForm.propTypes = {
    title: String
}
TextForm.defaultProps = {
    title: "Enter Text here"
}