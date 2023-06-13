import { useState } from "react";
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Meet the dentist',
      day: 'Feb 5th at 2:30pm',
    },
    {
      id: 2,
      text: 'Clean the room',
      day: 'Feb 6th at 6:30pm',
    },
    {
      id: 3,
      text: 'Do the shopping',
      day: 'Feb 8th at 8:00pm',
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
