import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {useState} from "react"

const ReactPopup = () => {
    const [ediText,onEdit] = useState("")

    const onChangeEdit = (e)=>{
      onEdit(e.target.value);
    }
    console.log(ediText)
    const onSubmitEdit = (e)=>{
        e.preventDefault()
        
    }
    return(
        <div>
        <Popup trigger={<button>edit</button>} position="right center">

        <div>
            <form onSubmit={onSubmitEdit}>
            <input onChange={onChangeEdit} value={ediText}/>
            <button>edit</button>
            </form>
        </div>
        </Popup>
</div>
    )
  
};
export default ReactPopup