import {useRef, useState} from 'react';


const Output = () => {
    const htmlContainer = useRef(null);
    const [output, setOutput] = useState(null);

    const DisplayOutput = () => {
        var a = htmlContainer.current.value;
        
        
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
                    <textarea></textarea>
                </div>
                <div id = "js" className="input">
                    <button>JS</button>
                    <textarea></textarea>
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