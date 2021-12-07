import {useRef, useState} from 'react';


const Output = () => {
    const htmlContainer = useRef(null);
    const cssContainer = useRef(null);
    const jsContainer = useRef(null);

    const DisplayOutput = () => {
       document.querySelector("iframe").contents().find("html").html()
        
        
    }
    

    return(
        <div>
            <div className ="input">
                <div id = "html" className="input">
                    <button>HTML</button>
                    <textarea ref={htmlContainer}></textarea>
                </div>
                <div id = "css" className="input">
                    <button>CSS</button>
                    <textarea ref={htmlContainer}></textarea>
                </div>
                <div id = "js" className="input">
                    <button>JS</button>
                    <textarea ref={htmlContainer}></textarea>
                </div>
            </div>

            <div className = "output">
                <button onClick={DisplayOutput}>Output</button>
                <iframe id ="iframe" title="Output"></iframe>
            </div>

        </div>
    )
}

export default Output;