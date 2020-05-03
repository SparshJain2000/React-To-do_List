import React, { Component } from "react";
import { Card, CardHeader, CardBody, Button } from "reactstrap";
export default class Todo extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className='row'>
                <div className='col-12 col-md-6  p-2 '>
                    <Card>
                        <CardHeader>
                            Heading
                            <span className='float-right'>
                                <Button color='danger'>X</Button>
                            </span>
                        </CardHeader>
                        <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Mollitia vitae iusto adipisci velit error nam
                        </CardBody>
                    </Card>
                </div>
                <div className='col-12 col-md-6  p-2 '>
                    <Card>
                        <CardHeader>
                            Heading
                            <span className='float-right'>
                                <Button color='danger'>X</Button>
                            </span>
                        </CardHeader>
                        <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Mollitia vitae iusto adipisci velit error nam
                            Lorem, ipsum dolor sit amet cons consectetur,
                            repellendus reprehenderit consequatur id qui numquam
                            tenetur ipsa perferendis aut.
                        </CardBody>
                    </Card>
                </div>
                <div className='col-12 col-md-6  p-2 '>
                    <Card>
                        <CardHeader>
                            Heading
                            <span className='float-right'>
                                <Button color='danger'>X</Button>
                            </span>
                        </CardHeader>
                        <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Mollitia vitae iusto adipisci velit error nam
                        </CardBody>
                    </Card>
                </div>
                <div className='col-12 col-md-6  p-2 '>
                    <Card>
                        <CardHeader>
                            Heading
                            <span className='float-right'>
                                <Button color='danger'>X</Button>
                            </span>
                        </CardHeader>
                        <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Mollitia vitae iusto adipisci velit error nam
                        </CardBody>
                    </Card>
                </div>
                <div className='col-12 col-md-6  p-2 '>
                    <Card>
                        <CardHeader>
                            Heading
                            <span className='float-right'>
                                <Button color='danger'>X</Button>
                            </span>
                        </CardHeader>
                        <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Mollitia vitae iusto adipisci velit error nam
                            officia totam delectus odit est magni optio, veniam
                            autem illo quos hic atque aspernatur quam.
                        </CardBody>
                    </Card>
                </div>
                <div className='col-12 col-md-6  p-2 '>
                    <Card>
                        <CardHeader>
                            Heading
                            <span className='float-right'>
                                <Button color='danger'>X</Button>
                            </span>
                        </CardHeader>
                        <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Mollitia vitae iusto adipisci velit error nam
                            officia totam delectus odit est magni optio, veniam
                            autem illo quos hic atque aspernatur quam.
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}
