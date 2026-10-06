const codespaceName = import.meta.env.VITE_CODESPACE_NAME

export const apiBase = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

// Accepts plain arrays, paginated `{ results: [] }`, and `{ data: [] }` envelopes.
export function toList(payload) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.results)) return payload.results
  if (Array.isArray(payload?.data)) return payload.data
  return []
}
