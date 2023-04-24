import logo from "./logo.svg";
import "./App.css";
// import { ipcRenderer } from "electron"; // 会报错，可以通过window.requrire处理
const { ipcRenderer } = window.require("electron"); // 1. 使用window.require，webpack不会解析electron的依赖
// 修改webpack的target为electron-renderer但是cra的定制性很差
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React in this pag天天e
        </a>
      </header>
    </div>
  );
}

export default App;
