import { useEffect, useState } from 'react'
import { toList } from './api'

// `load` must be stable (defined at module level) and return a fetch Response promise.
export function useResource(load) {
  const [state, setState] = useState({ items: [], loading: true, error: null })

  useEffect(() => {
    const controller = new AbortController()

    load(controller.signal)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        return response.json()
      })
      .then((payload) => setState({ items: toList(payload), loading: false, error: null }))
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setState({ items: [], loading: false, error: error.message })
        }
      })

    return () => controller.abort()
  }, [load])

  return state
}
