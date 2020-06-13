import React, { Component } from "react";

export default class Signup extends Component {
    render() {
        const { user, signOut, signInWithGoogle } = this.props.fb;
        return (
            <div>
                {user ? (
                    <p>Hello, {user.displayName}</p>
                ) : (
                    <p>Please sign in.</p>
                )}
                {user ? (
                    <button onClick={signOut}>Sign out</button>
                ) : (
                    <button onClick={signInWithGoogle}>
                        Sign in with Google
                    </button>
                )}
            </div>
        );
    }
}
