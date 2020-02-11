import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../Grid/index";
import { FormBtn, Input } from "../Form";
import { List, ListItem } from "../List";
import { Link } from "react-router-dom";
import DeleteBtn from "../DeleteBtn";


class SearchJumbo extends Component {
    state = {
        lastName: "",
        contacts: {},
    };

    handleFormSubmit = e => {
        e.preventDefault();
        API.getByName(this.state.lastName)
            .then(res => this.setState({
                contacts: res.data
            }))
            .catch(err => console.log(err))
        this.setState({ lastName: "" })
    };

    handleInputChange = e => {
        this.setState({ lastName: e.target.value });
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
                                value={this.state.lastName}
                                onChange={this.handleInputChange}
                                placeholder="Enter Last Name (case sensitive)" />
                            <FormBtn
                                onClick={this.handleFormSubmit}>
                                Search
                  </FormBtn>
                        </form>
                    </div>
                    {this.state.contacts.length ? (
                        <List>
                            {this.state.contacts.map(contact => (
                                <ListItem key={contact._id}>
                                    <Link to={"/contacts/" + contact._id}>
                                        <strong>
                                            <h2>{contact.lastName}, {contact.firstName}</h2>
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
            </Container>
        );
    }
}

export default SearchJumbo