var express = require("express");
const {
  getParentDropdown,
  getDataWithPagination,
  getById,
  createData,
  updateData,
  deleteData,
} = require("../controller/locationController");

const locationModel = require("../db/models/locationModel");
var router = express.Router();

router.route("/").get(getDataWithPagination);
router.route("/dropdownlist").get(getParentDropdown);
router.route("/:id").get(getById);
router.route("/create").post(createData);
router.route("/update/:id").put(updateData);
router.route("/delete/:id").delete(deleteData);

module.exports = router;
