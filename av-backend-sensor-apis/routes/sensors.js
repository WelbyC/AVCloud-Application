const express = require("express");
const router = express.Router();

// services
const LocationService = require("../services/LocationService");
const MovementService = require("../services/MovementService");
const ObstacleService = require("../services/ObstacleService");
const LaneInvasionService = require("../services/LaneInvasionService");
const LidarService = require("../services/LidarService");
const CollisionService = require("../services/CollisionService");
const ActiveStateService = require("../services/ActiveStateService");

/**
 * POST /api/sensor/location
 */
router.post("/location", async (req, res) => {
  const locationService = new LocationService();
  const result = await locationService.saveLocation(req.body);
  return result.success
    ? res.status(200).send(result.message)
    : res.status(400).send(result.message);
});

/**
 * POST /api/sensor/movement
 */
router.post("/movement", async (req, res) => {
  const movementService = new MovementService();
  const result = await movementService.saveMovement(req.body);
  return result.success
    ? res.status(200).send(result.message)
    : res.status(400).send(result.message);
});

/**
 * POST /api/sensor/collision
 */
router.post("/collision", async (req, res) => {
  const collisionService = new CollisionService();
  const result = await collisionService.saveCollision(req.body);
  return result.success
    ? res.status(200).send(result.message)
    : res.status(400).send(result.message);
});

/**
 * POST /api/sensor/obstacle
 */
router.post("/obstacle", async (req, res) => {
  const obstacleService = new ObstacleService();
  const result = await obstacleService.saveObstacle(req.body);
  return result.success
    ? res.status(200).send(result.message)
    : res.status(400).send(result.message);
});

/**
 * POST /api/sensor/lane_invasion
 */
router.post("/lane_invasion", async (req, res) => {
  const laneInvasionService = new LaneInvasionService();
  const result = await laneInvasionService.saveLaneInvasion(req.body);
  return result.success
    ? res.status(200).send(result.message)
    : res.status(400).send(result.message);
});

/**
 * POST /api/sensor/lidar
 */
router.post("/lidar", async (req, res) => {
  const lidarService = new LidarService();
  const result = await lidarService.saveLidar(req.body);
  return result.success
    ? res.status(200).send(result.message)
    : res.status(400).send(result.message);
});

/**
 * POST /api/sensor/active_state
 */
router.post("/active_state", async (req, res) => {
  const activeStateService = new ActiveStateService();
  const result = await activeStateService.saveActiveState(req.body);
  return result.success
    ? res.status(200).send(result.message)
    : res.status(400).send(result.message);
});

module.exports = router;
