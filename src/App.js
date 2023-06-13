import { useState } from "react";
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Meet the dentist',
    },
    {
      id: 2,
      text: 'Clean the room',
    },
    {
      id: 3,
      text: 'Do the shopping',
    }
  ])
  
  return (
    // you can have only one parent component (in this case it's div)
    <div className="container">
      <Header title="Task Tracker"/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
