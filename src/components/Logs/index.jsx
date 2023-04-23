import React from 'react'
import LogsItem from './LogsItem'
import './index.css'
import Card from '../UI/Card'

export default function Logs(props) {
  const logsItem = props.logs.map(item =>  <LogsItem key={item.id} {...item} deleteLog={()=>props.deleteLog(item.id)}/> )
  return (
    <Card className="logs">
      {
        logsItem.length !==0 ? logsItem:<h2>No Entry Found</h2>
      }        
    </Card>
  )
}
