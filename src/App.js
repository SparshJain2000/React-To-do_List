import React from "react";
import "./App.css";
import Todo from "./components/TodoComponent";
import AddComponent from "./components/AddComponent";
function App() {
    return (
        <div id='home'>
            <div
                className='mx-auto mt-5 p-3'
                style={{
                    backgroundColor: "rgba(0,0,0,.3)",
                    width: "80%",
                    borderRadius: "2em",
                }}>
                <h2 className='text-center m-5 text-white'>TO - DO LIST</h2>

                <div
                    className='container mx-auto mb-5 p-3'
                    style={{
                        backgroundColor: "rgba(255,255,255,.3)",
                        borderRadius: "2rem",
                    }}>
                    <AddComponent />
                    <Todo />
                </div>
            </div>
        </div>
    );
}

export default App;
