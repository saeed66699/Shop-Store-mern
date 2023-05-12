const express = require("express");
const {
  create_data_in_API,
  read_data,
  update_data,
  delete_data,
  edit_data,
  signup,
  login,
} = require("../controllers/controller");
const router = express.Router();

router.post("/create", create_data_in_API);
router.post("/signup", signup);
router.post("/login", login);
router.get("/read", read_data);
router.put("/update/:id", update_data);
router.delete("/delete/:id", delete_data);
router.get("/edit/:id", edit_data);

module.exports = router;
