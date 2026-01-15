exports.createUserProfile = async (req, res) => {
    try {
        const { userId, age, gender, height, weight, goal, activityLevel } = req.body;
        // Validate input
        if (!userId || !age || !gender || !height || !weight || !goal || !activityLevel) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        // Check if user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Create user profile
        const newUserProfile = new UserProfile({
            userId,
            age,
            gender,
            height,
            weight,
            goal,
            activityLevel
        });
        // Save user profile to database
        const savedProfile = await newUserProfile.save();
        res.status(201).json({
            status: 'ok',
            msg: 'User profile created successfully',
            profile: savedProfile
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};
exports.getUserProfile = async (req, res) => {
    try {
        const { userId } = req.params;
        // Check if user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Get user profile
        const userProfile = await UserProfile.findOne({ userId });
        if (!userProfile) {
            return res.status(404).json({ message: 'User profile not found' });
        }
        res.status(200).json({
            status: 'ok',
            profile: userProfile
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};
exports.updateUserProfile = async (req, res) => {
    try {
        const { userId } = req.params;
        const updates = req.body;
        // Check if user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Update user profile
        const updatedProfile = await UserProfile.findOneAndUpdate(
            { userId },
            updates,
            { new: true }
        );
        if (!updatedProfile) {
            return res.status(404).json({ message: 'User profile not found' });
        }
        res.status(200).json({
            status: 'ok',
            msg: 'User profile updated successfully',
            profile: updatedProfile
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};