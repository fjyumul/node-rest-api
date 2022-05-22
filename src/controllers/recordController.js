const recordService = require('../services/recordService');

const getRecordForWorkout = (req, res) => {
  try {
    const { workoutId } = req.params;

    if (!workoutId)
      return;

    const record = recordService.getRecordForWorkout(workoutId);
    res.send({status: "OK", data: record});

  } catch (error) {
    res.send({ status: "FAILED", data: error?.message || error });
  }
}

module.exports = {
  getRecordForWorkout
}
