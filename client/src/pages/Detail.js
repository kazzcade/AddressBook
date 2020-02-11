import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import SearchJumbo from "../components/SearchJumbo";

class Detail extends Component {
    state = {
        //establish state as contact object
        contact: {}
    };

    //brings back correct contact object from db via req params 
    componentDidMount() {
        API.getContact(this.props.match.params.id)
            .then(res => this.setState({ contact: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid>
                <row id="rowDetails">
                    <Col size="md-12">
                        <Jumbotron>
                            <h1 id="header">Michael Scott Paper Company</h1>
                            <h1 className="display-4">Directory</h1>
                            <Link to={"/add"} id="addLink">Add Contact</Link>
                            <Link to="/" id="addLink">Back to Address Book</Link>
                        </Jumbotron>
                        <SearchJumbo />
                        <jumbotron id="detailJumbo">
                            <div>
                                <h2>First Name: {this.state.contact.firstName}</h2>
                                <h2>Last Name: {this.state.contact.lastName}</h2>
                                <br></br>
                                <h2>Email: {this.state.contact.email}</h2>
                                <h2>Phone Number: {this.state.contact.phoneNumber}</h2>
                                <br></br>
                                <h2>Birthdate: {this.state.contact.birthDate}</h2>
                                <h2>Address: {this.state.contact.address}</h2>
                                <br></br>
                                <h2>Notes: {this.state.contact.notes}</h2>
                            </div>
                        </jumbotron>
                    </Col>
                </row>
            </Container>
        )
    }
}

export default Detail;