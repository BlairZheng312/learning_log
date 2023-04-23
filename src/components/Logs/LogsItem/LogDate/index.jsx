import React from 'react'
import './index.css'

export default function LogDate(props) {
  const {date} = props
  const month = date.toLocaleString('en-au', {month: 'long'})
  const day = date.getDate()
  return (
        <div className="date">
          <div className="month">{month}</div>
          <div className="day">{day}</div>
        </div>
  )
}
