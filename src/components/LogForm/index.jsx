import React, { useState } from 'react'
import Card from '../UI/Card'
import './index.css'

export default function LogForm(props) {

    const [inputDate, setDate] = useState('')
    const [inputSubject, setSubject] = useState('')
    const [inputTime, setTime] = useState('')

    const dateHandler = (e) => {
        setDate(e.target.value)
    }
    const subjectHandler = (e) => {
        setSubject(e.target.value)
    }
    const timeHandler = (e) => {
        setTime(e.target.value)
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()
        const newLog = {
            date: new Date(inputDate),
            subject: inputSubject,
            time: +inputTime
        }
        props.updateLog(newLog)
        setDate('')
        setSubject('')
        setTime('')

    }


    return (
        <Card className="log-form">
            <form onSubmit={formSubmitHandler}>
                <div className='log-item'>
                    <label htmlFor="date">Date</label>
                    <input id="date" type="date" value={inputDate} onChange={dateHandler} />
                </div>
                <div className='log-item'>
                    <label htmlFor="subject">Subject</label>
                    <input id="subject" type="text" value={inputSubject} onChange={subjectHandler} />
                </div>
                <div className='log-item'>
                    <label htmlFor="time">Time</label>
                    <input id="time" type="number" value={inputTime} onChange={timeHandler} />
                </div>
                <div className='form-btn'>
                    <button>Add Subject</button>
                </div>
            </form>
        </Card>
    )
}
