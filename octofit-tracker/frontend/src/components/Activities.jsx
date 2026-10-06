import { apiBase } from '../api'
import { useResource } from '../useResource'
import ResourceTable from './ResourceTable'

const url = `${apiBase}/api/activities/`

const columns = [
  { key: 'userEmail', label: 'User' },
  { key: 'type', label: 'Type' },
  { key: 'durationMinutes', label: 'Duration (min)' },
  { key: 'distanceKm', label: 'Distance (km)' },
  { key: 'caloriesBurned', label: 'Calories' },
  {
    key: 'completedAt',
    label: 'Completed',
    render: (item) => (item.completedAt ? new Date(item.completedAt).toLocaleString() : '-'),
  },
]

const load = (signal) => fetch(url, { signal })

export default function Activities() {
  const state = useResource(load)
  return <ResourceTable title="Activities" url={url} columns={columns} {...state} />
}
