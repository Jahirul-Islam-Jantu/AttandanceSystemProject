const { model, Schema } = require("mongoose");

const adminAttendanceSchema = new Schema({
  timeLimit: String,
  status: String,
  createdAt: Date,
});

const adminAttendance = model("admin", adminAttendanceSchema);
module.exports = adminAttendance;
