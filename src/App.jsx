import "./App.css";
import HomePage from "./pages/Index";

function App() {
  const value = true;
  return (
    <div className="App">
      <HomePage />
      {value ? "bener" : "salah"}
    </div>
  );
}

export default App;
