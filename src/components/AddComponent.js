import React, { Component } from "react";
import { Card, CardHeader, Button } from "reactstrap";
export default class AddComponent extends Component {
    render() {
        return (
            <div className='row ' width='100%'>
                <div className='col-12 m-1 mx-auto'>
                    <Button color='primary' style={{ width: "100%" }}>
                        Add Item
                        <span className='float-right'>
                            <i className='fa fa-plus fa-lg'></i>
                        </span>
                    </Button>
                </div>
            </div>
        );
    }
}
