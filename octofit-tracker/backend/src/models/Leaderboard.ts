import { Schema, model, models } from 'mongoose'

const leaderboardSchema = new Schema(
  {
    rank: { type: Number, required: true, unique: true },
    userEmail: { type: String, required: true },
    displayName: { type: String, required: true },
    teamName: { type: String, required: true },
    points: { type: Number, required: true },
  },
  { timestamps: true },
)

export default models.Leaderboard || model('Leaderboard', leaderboardSchema)