//require fetch for nodejs
const fetch = require('node-fetch');

export default {
  //get all contacts
  getAllContacts: function () {
    return fetch("/api/contacts");
  },
  //get contact by req-param
  getContact: function (id) {
    return fetch("/api/contacts/" + id);
  },
  //deletes contact
  deleteContact: function (id) {
    return fetch("/api/contacts/" + id, {
      method: "DELETE"
    });
  },
  //create contact
  submitContact: function (data) {
    return fetch("/api/contacts", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  },
  //update contact 
  updateContact: function (id, data) {
    return fetch("/api/contacts/" + id, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  },
  //get contact by name
  getByName: function (data) {
    return fetch("/api/contacts/all/" + data, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    });
  }

};

