const catchAsync = require('../utils/catchAsync');

const mainController = catchAsync(async (req, res, next) => {
  res.status(200).render('mainView');
});

module.exports = mainController;
