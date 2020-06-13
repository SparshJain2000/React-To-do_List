import React, { Component } from "react";
import Todo from "./TodoComponent";
import AddComponent from "./AddComponent";
import { connect } from "react-redux";
// import { ITEMS } from "../shared/items";
import { addItem, delItem } from "../redux/ActionCreators";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "../index.css";
const mapStateToProps = (state) => {
    return {
        items: state.items,
    };
};
const mapDispatchToProps = (dispatch) => ({
    addItem: (heading, description) => dispatch(addItem(heading, description)),
    delItem: (id) => dispatch(delItem(id)),
});
class Main extends Component {
    render() {
        const user = this.props.user,
            signOut = this.props.signOut,
            signInWithGoogle = this.props.signInWithGoogle;
        console.log(user);
        return (
            <div>
                {user ? (
                    <div
                        className='mx-auto mt-5 p-3'
                        id='main'
                        style={{
                            backgroundColor: "rgba(255,255,255,.3)",
                            width: "85%",
                            borderRadius: "1.3rem",
                        }}>
                        <button
                            className='btn btn-success float-right'
                            onClick={signOut}>
                            {user.displayName}
                        </button>
                        <h2 className='text-center m-5 text-white'>
                            TO - DO LIST
                        </h2>

                        <div
                            className='container mx-auto mb-3 pl-4 pr-4 p-3'
                            style={{
                                backgroundColor: "rgba(0,0,0,.3)",
                                borderRadius: "1em",
                            }}>
                            <AddComponent
                                items={this.props.items}
                                addItem={this.props.addItem}
                            />
                            <Todo
                                items={this.props.items}
                                delItem={this.props.delItem}
                            />
                        </div>
                    </div>
                ) : (
                    <div
                        className='mx-auto mt-5 p-3 d-flex flex-column justify-content-center'
                        id='main'
                        style={{
                            backgroundColor: "rgba(255,255,255,.3)",
                            width: "85%",
                            borderRadius: "1.3rem",
                        }}>
                        <button
                            className='btn btn-danger'
                            onClick={signInWithGoogle}>
                            Sign in with Google{" "}
                            <FontAwesomeIcon icon={faGoogle} />
                        </button>
                    </div>
                )}
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
