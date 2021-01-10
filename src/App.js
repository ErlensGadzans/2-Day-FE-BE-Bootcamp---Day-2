import logo from "./logo.svg";
import "./App.css";
import StartExamPage from "./components/StartExamPage";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Container>
        <StartExamPage />
      </Container>
    </div>
  );
}

export default App;
