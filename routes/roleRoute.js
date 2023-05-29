var express = require("express");
const {
  getDataWithPagination,
  getById,
  createData,
  updateData,
  deleteData,
} = require("../controller/roleController");

var router = express.Router();

router.route("/").get(getDataWithPagination);
router.route("/:id").get(getById);
router.route("/create").post(createData);
router.route("/update/:id").put(updateData);
router.route("/delete/:id").delete(deleteData);

module.exports = router;
