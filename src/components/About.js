import React, { useState } from 'react';

export const About = () => {
    const [accordionOpen, setAccordionOpen] = useState(0);
    const [btnText, setBtnText] = useState("Enable DarkMode")
    const [myStyle, setMyStyle] = useState({
        color: 'white',
        backgroundColor: 'black'
    })
    const [myStyle1, setMyStyle1] = useState({
        color: 'white',
        backgroundColor: 'black'
    })

    const toggleStyle = () => {
        if(myStyle.color == 'white' || myStyle1.color == 'white'){
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setMyStyle1({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText("Eable Dark Mode");
        }
        else{
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setMyStyle1({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText("Eable light Mode");
        }
    }

    const handleAccordionClick = (index) => {
        setAccordionOpen(accordionOpen === index ? null : index);
    };

    return (
        <>
            <div className='container' style={myStyle1}>
                <h1 className='my-2 mx-2 '>About US</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item"  style={myStyle}>
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                className={`accordion-button ${accordionOpen === 0 ? '' : 'collapsed'}`}
                                type="button"
                                onClick={() => handleAccordionClick(0)}
                            >
                                Accordion Item #1
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className={`accordion-collapse collapse ${accordionOpen === 0 ? 'show' : ''}`}
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button
                                className={`accordion-button ${accordionOpen === 1 ? '' : 'collapsed'}`}
                                type="button"
                                onClick={() => handleAccordionClick(1)}
                            >
                                Accordion Item #2
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className={`accordion-collapse collapse ${accordionOpen === 1 ? 'show' : ''}`}
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingThree">
                            <button
                                className={`accordion-button ${accordionOpen === 2 ? '' : 'collapsed'}`}
                                type="button"
                                onClick={() => handleAccordionClick(2)}
                            >
                                Accordion Item #3
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className={`accordion-collapse collapse ${accordionOpen === 2 ? 'show' : ''}`}
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" onClick={() => toggleStyle()} className="btn btn-dark my-4" >{btnText}</button>
            </div>
        </>
    );
};
