const ActiveStateModel = require("../models/ActiveStateModel");

class ActiveStateService {
  // save active state record
  async saveActiveState(params) {
    try {
      const newRecord = new ActiveStateModel({ ...params });
      await newRecord.save();
      return { success: true, message: "Active state record saved" };
    } catch (err) {
      console.error(err);
      return {
        success: false,
        message: "Failed to save active state record."
      };
    }
  }
}

module.exports = ActiveStateService;
