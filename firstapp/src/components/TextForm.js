import React,{useState} from 'react';

function TextForm(props) {
  
  const handleupclick=()=>{

    let newText=text.toUpperCase();
    setText(newText);
    props.showalert("Converted to upper case","success");
  }

  const handleupclick2=()=>{

    let newText=text.toLowerCase();
    setText(newText);

  }

   const clearclick=()=>{

    let newText='';
    setText(newText);

  }


  const handleOnchange=(event)=>{

    setText(event.target.value);
  }

  const[text,setText]=useState('Enter Text here');
  
  
  
    return (
    <><div className='container' style={{color : props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            {/* <div class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">Email address</label>
 <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div> */}
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" value={text} onChange={handleOnchange} id="mybox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleupclick}>Convert to Upper Case</button>
            <button className='btn btn-primary mx-2' onClick={handleupclick2}>Convert to Lower Case</button>
            <button className='btn btn-primary mx-2' onClick={clearclick}>Clear Text</button>
        </div><div className='container my-3' style={{color :props.mode==='dark'?'white':'#042743'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter(word => word !== "").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>        
            </div></>
  );
}

export default TextForm;
