import React from 'react'; 
import user from "../Images/user.png"
const ContactCard=(props)=>{
    const {id,name,email}=props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"/>
        <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
            <div>{id}</div>
        </div>
        <i className="trash alternate outline icon"  style={{color:"red", marginTop:"10px"}}></i>
    </div>
    );
}

export default ContactCard;