import { apiBase } from '../api'
import { useResource } from '../useResource'
import ResourceTable from './ResourceTable'

const url = `${apiBase}/api/teams/`

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'city', label: 'City' },
  { key: 'coach', label: 'Coach' },
  { key: 'memberCount', label: 'Members' },
  { key: 'weeklyGoalMinutes', label: 'Weekly Goal (min)' },
]

const load = (signal) => fetch(url, { signal })

export default function Teams() {
  const state = useResource(load)
  return <ResourceTable title="Teams" url={url} columns={columns} {...state} />
}
