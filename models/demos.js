const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//set up db object model
const contactSchema = new Schema({
  lastName: { type: String, required: true },
  firstName: { type: String, required: true },
  email: { type: String, required: false },
  phoneNumber: { type: String, required: false },
  birthDate: { type: String, required: false },
  address: { type: String, required: false },
  notes: { type: String, required: false }
})

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
