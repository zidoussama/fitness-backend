const mongoose = require('mongoose');
const { aggregate } = require('./User');

const userProfileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    height: { type: Number, required: true }, 
    weight: { type: Number, required: true }, 
    goal: { type: String, required: true },
    activityLevel: { type: String, required: true }, 
}, { timestamps: true });

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile;