const LaneInvasionModel = require("../models/LaneInvasionModel");

class LaneInvasionService {
  // save lane invasion record
  async saveLaneInvasion(params) {
    try {
      const newRecord = new LaneInvasionModel({ ...params });
      await newRecord.save();
      return { success: true, message: "Lane Invasion record saved" };
    } catch (err) {
      console.error(err);
      return {
        success: false,
        message: "Failed to save lane invasion record."
      };
    }
  }
}

module.exports = LaneInvasionService;
