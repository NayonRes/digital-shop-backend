const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  role_id: {
    type: String,
    required: [true, "Please enter role id"],
  },

  name: {
    type: String,
    required: [true, "Please enter role name"],
  },

  permission: Array,

  remarks: {
    type: String,
  },

  status: {
    type: Boolean,
    default: true,
  },
  created_by: {
    type: String,
    trim: true,
    default: "Admin",
  },
  created_at: { type: Date, default: Date.now },
  updated_by: {
    type: String,
    trim: true,
    default: "N/A",
  },
  updated_at: { type: Date, default: Date.now },
});

const roleModel = mongoose.model("role", roleSchema);
const saveData = async () => {
  let permissions = [
    "per100",
    "per101",
    "per102",
    "per103",
    "per104",
    "per105",
    "per106",
    "per107",
    "per108",
    "per109",
    "per110",
    "per111",
    "per112",
    "per113",
    "per114",
    "per115",
    "per116",
    "per117",
    "per118",
    "per119",
    "per120",
    "per121",
    "per122",
    "per123",
    "per124",
    "per125",
    "per126",
    "per127",
    "per128",
    "per129",
    "per130",
    "per131",
    "per132",
    "per133",
    "per134",
    "per135",
    "per136",
    "per137",
    "per138",
    "per139",
    "per140",
    "per141",
    "per142",
    "per143",
    "per144",
    "per145",
    "per146",
  ];
  let totalData = await roleModel.countDocuments();
  console.log("role totalData ", totalData);
  if (totalData < 1) {
    const roleDoc = new roleModel({
      role_id: "R100",
      name: "Super Admin",
      permission: permissions,
    });
    await roleDoc.save();
  }
};
saveData();

module.exports = roleModel;
