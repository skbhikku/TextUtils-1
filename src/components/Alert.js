import React from 'react'

export default function Alert(props) {
    const caps=(word)=>{
        const l = word.toLowerCase();
        return l.charAt(0).toUpperCase() + l.slice(1);
    }
  return (
    props.alert&&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{caps(props.alert.type)} </strong> : {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}
