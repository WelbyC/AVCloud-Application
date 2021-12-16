const LocationModel = require("../models/LocationModel");

class LocationService {
  // save location record
  async saveLocation(locationParams) {
    try {
      const newRecord = new LocationModel({ ...locationParams });
      await newRecord.save();
      return { success: true, message: "Location saved" };
    } catch (err) {
      console.error(err);
      return { success: false, message: "Failed to save location." };
    }
  }
}

module.exports = LocationService;
