import { apiBase } from '../api'
import { useResource } from '../useResource'
import ResourceTable from './ResourceTable'

const url = `${apiBase}/api/users/`

const columns = [
  { key: 'displayName', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' },
  { key: 'teamName', label: 'Team' },
  { key: 'fitnessGoal', label: 'Fitness Goal' },
]

const load = (signal) => fetch(url, { signal })

export default function Users() {
  const state = useResource(load)
  return <ResourceTable title="Users" url={url} columns={columns} {...state} />
}
