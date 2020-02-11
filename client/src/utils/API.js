import axios from "axios";

export default {
  //get all contacts
  getAllContacts: function () {
    return axios.get("/api/contacts");
  },
  //get contact by req-param
  getContact: function (id) {
    return axios.get("/api/contacts/" + id);
  },
  //deletes contact
  deleteContact: function (id) {
    return axios.delete("/api/contacts/" + id);
  },
  //create contact
  submitContact: function (data) {
    return axios.post("/api/contacts", data);
  },
  //update contact 
  updateContact: function (id, data) {
    return axios.put("/api/contacts/" + id, data);
  },
  //get contact by name
  getByName: function (data) {
    return axios.get("/api/contacts/all/" + data)
  }

};

