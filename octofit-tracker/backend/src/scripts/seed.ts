import mongoose from 'mongoose';
import Activity from '../models/Activity';
import Leaderboard from '../models/Leaderboard';
import Team from '../models/Team';
import User from '../models/User';
import Workout from '../models/Workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

const users = [
  {
    displayName: 'Mona Octavia',
    email: 'mona.octavia@example.com',
    role: 'Athlete',
    teamName: 'Harbor Hustlers',
    fitnessGoal: 'Improve 10K pace',
  },
  {
    displayName: 'Leo Rivera',
    email: 'leo.rivera@example.com',
    role: 'Coach',
    teamName: 'Summit Sprinters',
    fitnessGoal: 'Build aerobic base',
  },
  {
    displayName: 'Priya Shah',
    email: 'priya.shah@example.com',
    role: 'Athlete',
    teamName: 'Harbor Hustlers',
    fitnessGoal: 'Increase weekly strength sessions',
  },
];

const teams = [
  {
    name: 'Harbor Hustlers',
    city: 'San Francisco',
    coach: 'Leo Rivera',
    memberCount: 8,
    weeklyGoalMinutes: 1200,
  },
  {
    name: 'Summit Sprinters',
    city: 'Denver',
    coach: 'Avery Chen',
    memberCount: 6,
    weeklyGoalMinutes: 900,
  },
];

const activities = [
  {
    userEmail: 'mona.octavia@example.com',
    type: 'Run',
    durationMinutes: 42,
    distanceKm: 7.4,
    caloriesBurned: 510,
    completedAt: new Date('2026-10-01T14:30:00Z'),
  },
  {
    userEmail: 'leo.rivera@example.com',
    type: 'Cycling',
    durationMinutes: 55,
    distanceKm: 22.1,
    caloriesBurned: 620,
    completedAt: new Date('2026-10-02T12:15:00Z'),
  },
  {
    userEmail: 'priya.shah@example.com',
    type: 'Strength Training',
    durationMinutes: 38,
    distanceKm: 0,
    caloriesBurned: 260,
    completedAt: new Date('2026-10-03T18:45:00Z'),
  },
];

const leaderboard = [
  {
    rank: 1,
    userEmail: 'mona.octavia@example.com',
    displayName: 'Mona Octavia',
    teamName: 'Harbor Hustlers',
    points: 1840,
  },
  {
    rank: 2,
    userEmail: 'leo.rivera@example.com',
    displayName: 'Leo Rivera',
    teamName: 'Summit Sprinters',
    points: 1715,
  },
  {
    rank: 3,
    userEmail: 'priya.shah@example.com',
    displayName: 'Priya Shah',
    teamName: 'Harbor Hustlers',
    points: 1605,
  },
];

const workouts = [
  {
    title: 'Tempo Run Builder',
    focusArea: 'Cardio endurance',
    difficulty: 'Intermediate',
    estimatedMinutes: 45,
    recommendedForGoal: 'Improve 10K pace',
  },
  {
    title: 'Full Body Strength Circuit',
    focusArea: 'Strength',
    difficulty: 'Beginner',
    estimatedMinutes: 35,
    recommendedForGoal: 'Increase weekly strength sessions',
  },
  {
    title: 'Zone 2 Ride',
    focusArea: 'Aerobic base',
    difficulty: 'All levels',
    estimatedMinutes: 50,
    recommendedForGoal: 'Build aerobic base',
  },
];

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await User.insertMany(users);
    await Team.insertMany(teams);
    await Activity.insertMany(activities);
    await Leaderboard.insertMany(leaderboard);
    await Workout.insertMany(workouts);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
