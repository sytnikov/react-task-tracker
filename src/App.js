import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  return (
    // you can have only one parent component (in this case it's div)
    <div className="container">
        <Header title="Task Tracker"/>
        <Tasks />
    </div>
  );
}

export default App;
