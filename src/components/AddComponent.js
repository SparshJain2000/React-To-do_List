import React, { Component } from "react";
import {
    // Card,x
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    // ModalFooter,
} from "reactstrap";
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

    handleSubmit(event) {
        alert(this.heading.value + "\n" + this.description.value);
        event.preventDefault();
        this.toggleModal();
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
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor='heading'>Heading</Label>
                                <Input
                                    type='text'
                                    name='heading'
                                    // value={this.state.heading}
                                    // onChange={this.handleChange}
                                    innerRef={(input) => (this.heading = input)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='description'>Description</Label>
                                <Input
                                    type='textarea'
                                    name='description'
                                    innerRef={(input) =>
                                        (this.description = input)
                                    }
                                    // value={this.state.description}
                                    // onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Button
                                    className='text-white'
                                    color='warning'
                                    type='submit'
                                    value='submit'>
                                    Add
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
