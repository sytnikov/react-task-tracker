const tasks = [
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
]

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => <h3 key={task.id}>{task.text}</h3>)}
    </>
  )
}

export default Tasks
