import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../Grid/index";
import { FormBtn, Input } from "../Form";
import { List, ListItem } from "../List";
import { Link } from "react-router-dom";
import DeleteBtn from "../DeleteBtn";

class SearchJumbo extends Component {
    state = {
        name: "",
        contacts: {},
        results: true
    };

    handleFormSubmit = e => {
        e.preventDefault();
        API.getByName(this.state.name.toLowerCase())
            .then(res => res.json())
            .then(json => {
                this.setState({ contacts: json })
                if (this.state.contacts[0]) {
                    this.setState({ results: true })
                }
                else { this.setState({ results: false }) }
            })
            .catch(err => console.log(err))
        this.setState({ name: "" });


    };

    handleInputChange = e => {
        this.setState({ name: e.target.value })
    };

    deleteContact = id => {
        API.deleteContact(id)
            .then(res => window.location.reload())
            .catch(err => console.log(err))
    };

    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    render() {

        return (
            <Container>
                <div id="searchRes">
                    <div>
                        <form onSubmit={this.handleFormSubmit}>
                            <Input
                                name="searchField"
                                type="text"
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                placeholder="Enter Contact Name" />
                            <FormBtn
                                onClick={this.handleFormSubmit}>
                                Search
                  </FormBtn>
                        </form>
                        {this.state.results ? (
                            null
                        ) : (
                                <h1 id="noCont">No matches found</h1>
                            )}

                        {this.state.contacts.length ? (
                            <List>
                                {this.state.contacts.map(contact => (
                                    <ListItem key={contact._id}>
                                        <Link to={"/contacts/" + contact._id}>
                                            <strong>
                                                <h2>{this.capitalize(contact.lastName)}, {this.capitalize(contact.firstName)}</h2>
                                            </strong>
                                        </Link>
                                        <DeleteBtn onClick={() => this.deleteContact(contact._id)} />
                                        <Link id="editBtn" to={"/edit/" + contact._id}>Edit Contact</Link>
                                    </ListItem>

                                ))}
                            </List>
                        ) : (
                                null
                            )}
                    </div>
                </div>
            </Container>
        );
    }
}

export default SearchJumbo