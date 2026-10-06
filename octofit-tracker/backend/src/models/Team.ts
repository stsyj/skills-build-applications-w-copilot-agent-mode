import { Schema, model, models } from 'mongoose'

const teamSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    coach: { type: String, required: true },
    memberCount: { type: Number, required: true },
    weeklyGoalMinutes: { type: Number, required: true },
  },
  { timestamps: true },
)

export default models.Team || model('Team', teamSchema)