const catchAsync = require('../utils/catchAsync');

const mainController = catchAsync(async (req, res, next) => {
  res.status(200).render('mainView', {
    balance: process.env.balance || 1234,
    goal: process.env.goal || 45678,
  });
});

module.exports = mainController;
