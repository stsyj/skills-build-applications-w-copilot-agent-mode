import { apiBase } from '../api'
import { useResource } from '../useResource'
import ResourceTable from './ResourceTable'

const url = `${apiBase}/api/leaderboard/`

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'displayName', label: 'Name' },
  { key: 'teamName', label: 'Team' },
  { key: 'points', label: 'Points' },
]

const load = (signal) => fetch(url, { signal })

export default function Leaderboard() {
  const state = useResource(load)
  return <ResourceTable title="Leaderboard" url={url} columns={columns} {...state} />
}
