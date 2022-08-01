import React,{useState} from 'react'

export default function TextFrom(props) {
    const handleUpClick =()=>{
        console.log("Uppercase was clicked" +text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to upper case","success")
    }
    const handleLoClick =()=>{
        console.log("Lower case was clicked" +text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to lower case","success")
    }
    const handleCleanClick =()=>{
        console.log("Clear" +text);
        setText("")
        props.showAlert("Clear successfully","success")
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    const handleExtraSpace =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Single space maintained","success")
    }
    const [text,setText] = useState("");
    return (
    <>
    <div classNmae="container" style={{color: props.mode ==='light'? 'black': 'white'}} >
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <label htmlfor="exampleFormControlTextarea1" className="form-label"></label>
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='light'? 'white': 'grey',color: props.mode ==='light'? 'black': 'white'}} id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <button className="btn.btn.primary mx-1" onClick={handleUpClick}>Convert Upper Case Button</button>
    <button className="btn.btn.primary mx-1" onClick={handleLoClick}>Convert Lower Case Button</button>
    <button className="btn.btn.primary mx-1" onClick={handleCleanClick}>Clear Text</button>
    <button className="btn.btn.primary mx-1" onClick={handleExtraSpace}>Handle Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode ==='light'? 'black': 'white'}}>
       <h3>Your Text Summary</h3>
       <p>{text.length>0 ? text.trim().split(" ").length : 0} Words and {text.length} Charecters</p>
       <p>{0.008 * text.split(" ").length} Minutes Read</p>
       <h3>Preview</h3>
       <p>{text.length>0?text:"Enter something on your text area"}</p>
    </div>
    </>  
  )
}
 