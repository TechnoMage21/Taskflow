import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Todos from "./components/Todos";
function App() {
  return (
    <div className="App">
      <h1 className="text-heading">Get Things Listed</h1>
      <Todos />
    </div>
  );
}

export default App;
