const User = require('../models/User');

const defaultUsers = [
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

async function seedDefaultUsers() {
  try {
    console.log('🌱 Checking for default users...');

    for (const userData of defaultUsers) {
      // Check if user already exists
      const existing = await User.findOne({ username: userData.username });
      if (existing) {
        console.log(`   ℹ️  User '${userData.username}' already exists, skipping`);
        continue;
      }

      // Create new user
      const user = new User({
        username: userData.username,
        passwordHash: userData.password, // Will be hashed by pre-save hook
        fullName: userData.fullName,
        role: userData.role
      });

      await user.save();
      console.log(`   ✅ Created ${userData.role}: ${userData.username}`);
    }

    console.log('🌱 Default users check complete\n');
  } catch (error) {
    console.error('❌ Error seeding default users:', error.message);
    // Don't throw - let the server continue even if seeding fails
  }
}

module.exports = seedDefaultUsers;
