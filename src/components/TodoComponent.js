import React, { Component } from "react";
import { Card, CardHeader, CardBody, Button, CardFooter } from "reactstrap";
// import { ITEMS } from "../shared/items";
class RenderItem extends Component {
    constructor(props) {
        super(props);
        this.handelDelete = this.handelDelete.bind(this);
    }
    handelDelete() {
        this.props.delItem(this.props.item.id);
    }
    render() {
        return (
            <Card
                className='bg-secondary text-white'
                style={{ borderRadius: "1.1rem" }}>
                <CardHeader
                    className='bg-dark'
                    style={{ fontSize: "1.3rem", borderRadius: "1rem" }}>
                    {this.props.item.heading}
                    <span className='float-right'>
                        <Button color='danger' onClick={this.handelDelete}>
                            X
                        </Button>
                    </span>
                </CardHeader>
                <CardBody>{this.props.item.description}</CardBody>
                <CardFooter
                    className='text-right'
                    style={{ fontSize: ".8rem" }}>
                    {new Intl.DateTimeFormat("en-US", {
                        hour: "numeric",
                        minute: "numeric",

                        year: "numeric",
                        month: "long",
                        day: "2-digit",
                    }).format(new Date(this.props.item.date))}
                </CardFooter>
            </Card>
        );
    }
}
export default class Todo extends Component {
    render() {
        if (this.props.items === undefined) return <div></div>;
        else
            return (
                <div className='row'>
                    {console.log(this.props.items)}
                    {this.props.items.map((item) => {
                        return (
                            <div className='col-12 col-md-6 p-2' key={item.id}>
                                <RenderItem
                                    item={item}
                                    delItem={this.props.delItem}
                                />
                            </div>
                        );
                    })}
                </div>
            );
    }
}
