import React, { Component } from "react";
import {
    // Card,x
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Label,
    Row,
    Col,
    // ModColalFooter,
} from "reactstrap";
import { LocalForm, Control } from "react-redux-form";
// import { ITEMS } from "../shared/items";
export default class AddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // heading: "",
            // description: "",
            isModalOpen: false,
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }

    handleSubmit(values) {
        // console.log(this.heading.value + "\n" + this.description.value);
        this.toggleModal();
        this.props.addItem(values.heading, values.description);
        // event.preventDefault();
        // this.toggleModal();
    }
    render() {
        return (
            <div className='row ' width='100%'>
                <div className='col-12 m-1 mx-auto'>
                    {/* <Button >
                        Add Item
                        <span className='float-right'>
                            <i className='fa fa-plus fa-lg'></i>
                        </span>
                    </Button> */}

                    <Button
                        onClick={this.toggleModal}
                        color='primary'
                        style={{ width: "100%" }}>
                        Add Item
                        <span className='float-right'>
                            <i className='fa fa-plus fa-lg'></i>
                        </span>
                    </Button>
                </div>
                <Modal
                    isOpen={this.state.isModalOpen}
                    toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Add a Item
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={this.handleSubmit}>
                            <Row className='form-group'>
                                <Label htmlFor='heading' md={12}>
                                    Heading
                                </Label>
                                {/* <FormGroup>
                                
                                <Input
                                    type='text'
                                    name='heading'
                                    // value={this.state.heading}
                                    // onChange={this.handleChange}
                                    innerRef={(input) => (this.heading = input)}
                                />
                            </FormGroup> */}
                                <Col md={12}>
                                    <Control.text
                                        model='.heading'
                                        className='form-control'
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Col md={12}>
                                    <Label htmlFor='description'>
                                        Description
                                    </Label>
                                </Col>
                                <Col md={12}>
                                    <Control.textarea
                                        className='form-control'
                                        model='.description'
                                        // value={this.state.description}
                                        // onChange={this.handleChange}
                                    />
                                </Col>
                            </Row>
                            <Button
                                className='text-white'
                                color='warning'
                                type='submit'
                                value='submit'>
                                Add
                            </Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
