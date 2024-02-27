import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const TextForm = (props) => {
    const [text, settext] = useState("");
    const [originalText, setOriginalText] = useState('');
    const [isMorseCode, setIsMorseCode] = useState(false);
    const HandleOnChange = (event) => {
        console.log("On Change");
        settext(event.target.value)
        setOriginalText(event.target.value)
    }
    const HandleUpClick = () => {
        console.log("Upper Case Clicked");
        let newText = text.toUpperCase();
        settext(newText);
        setOriginalText(newText);
    }
    const HandlelowClick = () => {
        console.log("Lower Case Clicked");
        let newText = text.toLowerCase();
        settext(newText);
        setOriginalText(newText);
    }
    const HandleclearText = () => {
        console.log("Clear Text Clicked");
        settext("");
        setOriginalText("");
    }
    const HandleMorseCode = () => {
        if (isMorseCode) {
            settext(originalText);
        }
        else {
            console.log("Morse Code Clicked");
            const morseCodeMap = {
                'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
                'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
                'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
                'Y': '-.--', 'Z': '--..',
                '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....',
                '7': '--...', '8': '---..', '9': '----.',
                ' ': '/'
            };
            let Newtext = text.toUpperCase();
            let morseCode = '';
            for (let char of Newtext) {
                const morseChar = morseCodeMap[char];
                if (morseChar !== undefined) {
                    morseCode += morseChar + ' ';
                }
            }
            settext(morseCode);
        }
        setIsMorseCode(!isMorseCode);
    }
    return (
        <>
            <div className='container'>
                <h1>{props.title}</h1>
                <div className="form-group">
                    {/* <label for="myBox">{props.title}</label> */}
                    <textarea className="form-control" value={text} onChange={(event) => HandleOnChange(event)} id="myBox" rows="10" ></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={() => HandleUpClick()}>To Upper</button>
                <button className="btn btn-primary mx-2" onClick={() => HandlelowClick()}>To Upper</button>
                <button className="btn btn-primary mx-2" onClick={() => HandleclearText()}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={() => HandleMorseCode()}>{isMorseCode ? "Switch to Text" : "Morse Code"}</button>
            </div>
            <div className='container my-2'>
                <h2>Your Text Summary</h2>
                <p>There are {text.trim().split(/\s+/).filter(Boolean).length} words and length is {text.length}</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    title: String
}
TextForm.defaultProps = {
    title: "Enter Text here"
}