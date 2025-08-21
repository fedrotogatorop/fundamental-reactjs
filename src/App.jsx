import "./App.css";
import HomePage from "./pages/Index";

function App() {
  const name = "Fedro";

  return (
    <div className="App">
      <HomePage name={name}/>
    </div>
  );
}

export default App;
