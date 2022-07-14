import React from 'react';
import "./SidebarOption.css";
import { useNavigate } from 'react-router-dom';
import db from "./firebase.js";
import { addDoc } from 'firebase/firestore';
import { collection } from "firebase/firestore";

function SidebarOption({Icon, title, id, addChannelOption}) {

  const history = useNavigate();

  const selectChannel = () => {
    if (id) {
      history(`/room/${id}`,{replace:true});
    }
    else{
      history(title,{replace: true});
    }
  };

  const addChannel= () => {
    const channelName = prompt('Please enter the channel name')
    if (channelName){
      const addnames = collection(db, 'rooms')
      return addDoc(addnames,{
        name: channelName
      })
    }
  };

  return (
    <div className= "sidebarOption" onClick = {addChannelOption ? addChannel : selectChannel}>
        {Icon && <Icon className="sidebarOption_icon" />}
        {Icon ? <h3>{title}</h3> : <h3 className="sidebarOption_channel">
            <span className="sidebarOption_hash">#</span> {title}</h3>}

    </div>
  )
}

export default SidebarOption