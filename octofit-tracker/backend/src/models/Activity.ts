import { Schema, model, models } from 'mongoose'

const activitySchema = new Schema(
  {
    userEmail: { type: String, required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    distanceKm: { type: Number, required: true },
    caloriesBurned: { type: Number, required: true },
    completedAt: { type: Date, required: true },
  },
  { timestamps: true },
)

export default models.Activity || model('Activity', activitySchema)