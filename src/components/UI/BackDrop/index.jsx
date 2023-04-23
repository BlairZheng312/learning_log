import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


const backdropRoot = document.getElementById('backdrop-root')

export default function BackDrop(props) {
    return ReactDOM.createPortal(<div className='back-drop'>
        {props.children}
    </div>, backdropRoot)
}
