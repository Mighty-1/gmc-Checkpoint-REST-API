const express = require("express");
const cs = require("../controller/user.controller");
const router = express.Router();

router.post("/create-user", cs.createUser);
router.put("/update-user/:id", cs.updateUserById)
router.get("/fetch-all-user", cs.fetchAllUsers);
router.delete("/delete-one/:id", cs.delById);

module.exports = router;
