import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(" Converted to UpperCase!", "success")
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(" Converted to lowerCase!", "success")
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert(" Text is cleared!", "success")
    }

    const handleCapitalClick = () => {
        let newText = capitalizeWords(text);
        setText(newText);
        props.showAlert(" Text is capitalized!", "success")
      };
      
      const capitalizeWords = (input) => {
        return input
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      };
      
    
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    } 

    const handleCopyClick = () => {
        var text = document.getElementById("MyBox");
        text.select();
        // text.setSelectionRange(0, 9999); this method is not neccessary to given range, (text.value) is sufficient.
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Copied!", "success")

      }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert(" Remove extra spaces!", "success")
    }  

    const [text, setText] = useState("");
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#343a40':'white', color: props.mode==='dark'?'white':'black'}} id="MyBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleCapitalClick}>Capitalized Case</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text: "Enter something in the above textbox to preview it here"}</p>
        </div>
        </>
    )
}
