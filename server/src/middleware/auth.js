const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.authenticate = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded.userId, isActive: true });

    if (!user) {
      return res.status(401).json({ message: 'User not found or inactive' });
    }

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: 'You do not have permission to perform this action'
      });
    }
    next();
  };
};

exports.isAdmin = exports.authorize('admin');
exports.isBillingStaff = exports.authorize('billing_staff');
exports.isDoctor = exports.authorize('doctor');
exports.isNurse = exports.authorize('nurse');
exports.isPatient = exports.authorize('patient');

exports.isMedicalStaff = exports.authorize('doctor', 'nurse');
exports.isStaff = exports.authorize('admin', 'billing_staff', 'doctor', 'nurse'); 