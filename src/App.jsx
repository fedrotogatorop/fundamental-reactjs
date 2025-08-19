import "./App.css";
import HomePage from "./pages/Index";

function App() {
  const value = true;
  return (
    <div className="App">
      {value ? " bener" : "salah"}
      <HomePage />
    </div>
  );
}

export default App;
