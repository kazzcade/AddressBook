const router = require("express").Router();

//point route to methods for models
const contactsController = require("../../controllers/contactsController");

//matches "/api/contacts"
router
  .route("/")
  .get(contactsController.findAll)
  .post(contactsController.create);


//matches "api/contacts/:id"
router
  .route("/:id")
  .get(contactsController.findById)
  .put(contactsController.update)
  .delete(contactsController.remove);

//matches with "api/contacts/all/:category"
router
  .route("/all/:category")
  .get(contactsController.findByCategory)

module.exports = router;

