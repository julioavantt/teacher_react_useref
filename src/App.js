import "./App.css";
import { UseRefComoVariable } from "./components/UseRefComoVariable";
import { UseRefDom } from "./components/UseRefDom";

function App() {
  return (
    <div className="container">
      <UseRefComoVariable />
      <hr />
      <UseRefDom />
    </div>
  );
}

export default App;
