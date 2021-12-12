import {useRef, useState} from 'react';


const Output = () => {
    const htmlContainer = useRef(null);
    const cssContainer = useRef(null);
    const jsContainer = useRef(null);
 


    const DisplayOutput = (e) => {
        e.preventDefault();
        var HTML =htmlContainer.current.value;
        var CSS = cssContainer.current.value;
        var JS = jsContainer.current.value;

        if(HTML == null){
            HTML = "";
        }
        if(CSS == null){
            CSS = "";
        }
        if(JS
             == null){
           JS = "";
        }


        var output = "<html><head><style type = 'text/css'>"+CSS+"</style></head><body>"+HTML+
        "</body></html>"
        console.log(JS);
        document.getElementById("iframe").contentWindow.eval(JS);
        document.getElementById("iframe").contentWindow.document.body.innerHTML = output ;

        
    }
    

    return(
        <div>
            <div className ="input">
                <form onSubmit={DisplayOutput}>
                <button type="submit" className="outputButton">Output</button>
                <div id = "html" >
                    <button>HTML</button><br/>
                    <textarea ref={htmlContainer}></textarea>
                </div>
                <div id = "css" >
                    <button>CSS</button><br/>
                    <textarea ref={cssContainer}></textarea>
                </div>
                <div id = "js">
                    <button>JS</button><br/>
                    <textarea ref={jsContainer}></textarea>
                </div>
                <div >
               
                </div>
                </form>
            </div>

            <div className = "output">
                <h1>Output</h1>
                <a><iframe  id ="iframe" title="Output"></iframe></a>
                <div id="FinalOutput"></div>
                </div>

        </div>
    )
}

export default Output;