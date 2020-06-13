import React, { Component } from "react";
import "./App.css";
import Main from "./components/MainComponent";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
const store = ConfigureStore();
const firebaseApp = firebase.initializeApp(firebaseConfig);
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { user, signOut, signInWithGoogle } = this.props;
        return (
            <Provider store={store}>
                <div>
                    <Main
                        user={user}
                        signInWithGoogle={signInWithGoogle}
                        signOut={signOut}
                    />
                </div>
            </Provider>
        );
    }
}
const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};
// export default App;
export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(App);
