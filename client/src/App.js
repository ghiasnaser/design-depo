import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <div className="">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
