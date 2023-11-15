const catchAsync = require('../utils/catchAsync');

const mainController = catchAsync(async (req, res, next) => {
  res.status(200).render('mainView', { balance: 1500, goal: 35000 });
});

module.exports = mainController;
