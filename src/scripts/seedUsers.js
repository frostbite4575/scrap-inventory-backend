require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');

const users = [
  {
    username: 'operator1',
    password: 'operator123',
    fullName: 'John Operator',
    role: 'operator'
  },
  {
    username: 'engineer1',
    password: 'engineer123',
    fullName: 'Jane Engineer',
    role: 'engineer'
  },
  {
    username: 'manager1',
    password: 'manager123',
    fullName: 'Bob Manager',
    role: 'manager'
  }
];

async function seedUsers() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing users (optional - comment out if you want to keep existing users)
    // await User.deleteMany({});
    // console.log('🗑️  Cleared existing users');

    // Create users
    for (const userData of users) {
      // Check if user already exists
      const existing = await User.findOne({ username: userData.username });
      if (existing) {
        console.log(`⚠️  User '${userData.username}' already exists, skipping`);
        continue;
      }

      const user = new User({
        username: userData.username,
        passwordHash: userData.password, // Will be hashed by pre-save hook
        fullName: userData.fullName,
        role: userData.role
      });

      await user.save();
      console.log(`✅ Created ${userData.role}: ${userData.username} (password: ${userData.password})`);
    }

    console.log('\n📋 Summary of created users:');
    console.log('============================');
    console.log('Username: operator1 | Password: operator123 | Role: operator');
    console.log('Username: engineer1 | Password: engineer123 | Role: engineer');
    console.log('Username: manager1  | Password: manager123  | Role: manager');
    console.log('============================\n');

    mongoose.connection.close();
    console.log('✅ Database connection closed');
  } catch (error) {
    console.error('❌ Error seeding users:', error);
    process.exit(1);
  }
}

seedUsers();
