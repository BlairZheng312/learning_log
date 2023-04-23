import React, { useState } from 'react'
import LogDate from './LogDate'
import './index.css'
import Card from '../../UI/Card'
import ConfirmWindow from '../../UI/ConfirmWindow'


export default function LogsItem(props) {
    const { date, subject, time, deleteLog } = props

    const [showConfirm, setConfirm] = useState(false)

    const deleteHandler = () => {
        setConfirm(true)
    }

    const onCancel = () => {
        setConfirm(false)
    }

    const onConfirm = () => {           
        deleteLog()
    }
    return (

        <Card className="item">
            {showConfirm && <ConfirmWindow confirmText={'Confirm Delete?'} onCancel={onCancel} onConfirm={onConfirm}/>}
            <LogDate date={date} />
            <div className="content">
                <div className="subject">{subject}</div>
                <div className="time">{time} hr</div>
            </div>
            <div>
                <div className="delete" onClick={deleteHandler}>×</div>
            </div>
        </Card>
    )
}
