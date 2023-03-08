

import "./taskbar.css";
import React, {useState} from "react";

export default function Taskbar( {searchText}) {

 const [text,setText]=useState('');

 const onSubmit = (e) =>{
   e.preventDefault();
   searchText(text);
 }

  return (
    <div className="taskbar">
    <form>
      <input  onChange={e =>setText(e.target.value)} type="text" placeholder="Search" />S
      <button onClick={onSubmit} type="submit">Search</button>
    </form>
  </div>
  )
}
