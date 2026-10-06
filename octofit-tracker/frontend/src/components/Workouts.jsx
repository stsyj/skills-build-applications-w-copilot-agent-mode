import { apiBase } from '../api'
import { useResource } from '../useResource'
import ResourceTable from './ResourceTable'

const url = `${apiBase}/api/workouts/`

const columns = [
  { key: 'title', label: 'Workout' },
  { key: 'focusArea', label: 'Focus Area' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'estimatedMinutes', label: 'Duration (min)' },
  { key: 'recommendedForGoal', label: 'Recommended For' },
]

const load = (signal) => fetch(url, { signal })

export default function Workouts() {
  const state = useResource(load)
  return <ResourceTable title="Workouts" url={url} columns={columns} {...state} />
}
