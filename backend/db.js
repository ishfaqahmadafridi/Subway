const mongoose = require('mongoose');

module.exports = async () => {
    const parameter = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    
    try {
        await mongoose.connect(process.env.MONGODB_URL, parameter);
        console.log("✅ Connected to DataBase.");
    } catch (error) {
        console.log("❌ Could not connect to DataBase.", error.message);
    }
};
