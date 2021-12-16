const LidarModel = require("../models/LidarModel");

class LidarService {
  // save lidar record
  async saveLidar(params) {
    try {
      const newRecord = new LidarModel({ ...params });
      await newRecord.save();
      return { success: true, message: "LIDAR record saved" };
    } catch (err) {
      console.error(err);
      return {
        success: false,
        message: "Failed to save LIDAR record."
      };
    }
  }
}

module.exports = LidarService;
