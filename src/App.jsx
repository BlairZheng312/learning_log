import { useState } from 'react'
import Logs from "./components/Logs";
import LogForm from "./components/LogForm"
import './App.css'

function App() {

  const [logs, setLogs] = useState([
    { id: '001', date: new Date(2022, 5, 8), subject: 'Vue', time: '2' },
    { id: '002', date: new Date(2023, 4, 8), subject: 'React', time: '8' },
    { id: '003', date: new Date(2023, 3, 12), subject: 'JS', time: '2' },
  ])

  const updateLog = (newLog) => {
    newLog.id = Date.now() + ''
    setLogs([newLog, ...logs])
  }

  const deleteLog = (logId) => {
    setLogs(logs.filter(item => logId !== item.id ))
  }

  return (
    <div className="app">
      <LogForm updateLog={updateLog} />
      <Logs logs={logs} deleteLog={deleteLog} />
    </div>
  );
}

export default App;
