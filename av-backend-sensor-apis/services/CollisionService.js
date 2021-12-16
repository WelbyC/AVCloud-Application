const CollisionModel = require("../models/CollisionModel");

class CollisionService {
  // save collision record
  async saveCollision(params) {
    try {
      const newRecord = new CollisionModel({ ...params });
      await newRecord.save();
      return { success: true, message: "Collision record saved" };
    } catch (err) {
      console.error(err);
      return { success: false, message: "Failed to save collision record." };
    }
  }
}

module.exports = CollisionService;
