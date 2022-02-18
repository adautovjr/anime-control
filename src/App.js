import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import './resources/App.css'

import AppRoutes from './routes'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="Page-container">
        <Routes>
          {AppRoutes.map((route, i) => (
            <Route key={`${route.component.name}-${i}`} path={route.path} element={route.component} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
