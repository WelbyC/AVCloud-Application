const ObstacleModel = require("../models/ObstacleModel");

class ObstacleService {
  // save obstacle record
  async saveObstacle(params) {
    try {
      const newRecord = new ObstacleModel({ ...params });
      await newRecord.save();
      return { success: true, message: "Obstacle record saved" };
    } catch (err) {
      console.error(err);
      return {
        success: false,
        message: "Failed to save obstacle record."
      };
    }
  }
}

module.exports = ObstacleService;
