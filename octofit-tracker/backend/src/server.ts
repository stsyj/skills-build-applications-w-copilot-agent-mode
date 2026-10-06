import express from 'express'
import './config/database'
import Activity from './models/Activity'
import Leaderboard from './models/Leaderboard'
import Team from './models/Team'
import User from './models/User'
import Workout from './models/Workout'

const app = express()
const port = 8000
const codespaceName = process.env.CODESPACE_NAME
const frontendOrigin = process.env.FRONTEND_ORIGIN ?? (
  codespaceName
    ? `https://${codespaceName}-5173.app.github.dev`
    : 'http://localhost:5173'
)
export const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

app.use(express.json())

app.use((request, response, next) => {
  if (request.get('Origin') !== frontendOrigin) {
    return response.status(403).json({ error: 'Origin not allowed' })
  }

  response.setHeader('Access-Control-Allow-Origin', frontendOrigin)
  response.setHeader('Vary', 'Origin')
  response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  if (request.method === 'OPTIONS') {
    return response.sendStatus(204)
  }

  next()
})

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', baseUrl })
})

app.get('/api/users/', async (_request, response) => {
  const data = await User.find().sort({ displayName: 1 }).lean()

  response.json({ resource: 'users', url: `${baseUrl}/api/users/`, data })
})

app.get('/api/teams/', async (_request, response) => {
  const data = await Team.find().sort({ name: 1 }).lean()

  response.json({ resource: 'teams', url: `${baseUrl}/api/teams/`, data })
})

app.get('/api/activities/', async (_request, response) => {
  const data = await Activity.find().sort({ completedAt: -1 }).lean()

  response.json({ resource: 'activities', url: `${baseUrl}/api/activities/`, data })
})

app.get('/api/leaderboard/', async (_request, response) => {
  const data = await Leaderboard.find().sort({ rank: 1 }).lean()

  response.json({ resource: 'leaderboard', url: `${baseUrl}/api/leaderboard/`, data })
})

app.get('/api/workouts/', async (_request, response) => {
  const data = await Workout.find().sort({ title: 1 }).lean()

  response.json({ resource: 'workouts', url: `${baseUrl}/api/workouts/`, data })
})

app.listen(port, () => {
  console.log(`OctoFit API listening on port ${port} (${baseUrl})`)
})