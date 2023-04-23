import React from 'react'
import Card from '../Card'
import BackDrop from '../BackDrop'
import './index.css'

export default function ConfirmWindow(props) {

  return (
    <BackDrop>
      <Card className='confirmWindow'>
        <div className='confirmText'>{props.confirmText}</div>
        <div className='confirmBtn'>
          <button className='okBtn' onClick={props.onConfirm}>Confirm</button>
          <button onClick={props.onCancel}>Cancel</button>
        </div>
      </Card>
    </BackDrop>

  )
}
