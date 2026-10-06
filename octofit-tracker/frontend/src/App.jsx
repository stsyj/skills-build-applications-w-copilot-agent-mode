import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import logo from './assets/octofitapp-small.png'
import Activities from './components/Activities'
import Leaderboard from './components/Leaderboard'
import Teams from './components/Teams'
import Users from './components/Users'
import Workouts from './components/Workouts'

const navItems = [
  { to: '/activities', label: 'Activities' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/teams', label: 'Teams' },
  { to: '/users', label: 'Users' },
  { to: '/workouts', label: 'Workouts' },
]

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
            <img src={logo} alt="OctoFit" height="32" />
            OctoFit Tracker
          </NavLink>
          <ul className="navbar-nav flex-row flex-wrap gap-3">
            {navItems.map((item) => (
              <li className="nav-item" key={item.to}>
                <NavLink className="nav-link" to={item.to}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Navigate to="/activities" replace />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="*" element={<Navigate to="/activities" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
