import React from "react";
import "./App.css";
import Main from "./components/MainComponent";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
const store = ConfigureStore();

function App() {
    return (
        <Provider store={store}>
            <div>
                <Main />
            </div>
        </Provider>
    );
}

export default App;
