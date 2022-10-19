import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.scss";
import Layout from "./Layout/layout";
import Board from "./Screen/board.screen";
import Main from "./Screen/Main.screen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Main />}></Route>
            <Route path="/board" element={<Board />}></Route>
          </Routes>{" "}
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
