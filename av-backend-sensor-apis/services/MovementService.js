const MovementModel = require("../models/MovementModel");
class MovementService {
  // save movement record
  async saveMovement(movementParams) {
    try {
      const newMovement = new MovementModel({ ...movementParams });
      await newMovement.save();
      return { success: true, message: "Movement saved" };
    } catch (err) {
      console.error(err);
      return { success: false, message: "Failed to save movement." };
    }
  }
}

module.exports = MovementService;
