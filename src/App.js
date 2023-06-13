import Header from './components/Header'

function App() {
  return (
    // you can have only one parent component (in this case it's div)
    <div className="container">
        <Header title="Task Tracker"/>
    </div>
  );
}

export default App;
