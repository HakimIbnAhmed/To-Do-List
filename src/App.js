import { Button } from "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./Components/Form";
import Item from "./Components/Item";

function App() {
  return (
    <>
      <div className="App">
        <h1 className="text-center mt-3">To do List</h1>
      </div>
      <Form />
    </>
  );
}

export default App;
