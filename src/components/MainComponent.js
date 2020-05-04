import React, { Component } from "react";
import Todo from "./TodoComponent";
import AddComponent from "./AddComponent";
import { connect } from "react-redux";
// import { ITEMS } from "../shared/items";
import { addItem, delItem } from "../redux/ActionCreators";
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
        return (
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
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
