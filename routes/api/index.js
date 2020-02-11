const router = require("express").Router();
const contactRoutes = require("./contacts");

//contact routes (/api/contacts)
router.use("/contacts", contactRoutes);

module.exports = router;