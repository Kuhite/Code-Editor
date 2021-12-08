import {useRef, useState} from 'react';
import $ from 'jquery';

const Output = () => {
    const htmlContainer = useRef("");
    const cssContainer = useRef("");
    const jsContainer = useRef("");
  
    const DisplayOutput = () => {
        const HTML = htmlContainer.current.value;
        const CSS = cssContainer.current.value;
        const JS = jsContainer.current.value;
        $("iframe").contents().find("html").html(
            "<html><head><style type = 'text/css'>"+CSS+"</style></head><body>"+HTML+"<script type='text/javascript'></script></body></html>");
            document.getElementById("iframe").contentWindow.eval($("js").val());
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
                    <textarea ref={cssContainer}></textarea>
                </div>
                <div id = "js" className="input">
                    <button>JS</button>
                    <textarea ref={jsContainer}></textarea>
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