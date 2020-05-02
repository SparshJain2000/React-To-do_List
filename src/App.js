import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/TodoComponent";
import AddComponent from "./components/AddComponent";
function App() {
    return (
        <div
            className='mx-auto mt-5 p-3'
            style={{ backgroundColor: "rgba(0,0,0,.3)", width: "80%" }}>
            <h2 className='text-center m-5'>TO - DO LIST</h2>

            <div
                className='container mx-auto'
                style={{ backgroundColor: "gray" }}>
                <AddComponent />
                <Todo />
            </div>
        </div>
    );
}

export default App;
