import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MyNavbar from './components/MyNavbar'
import WeatherApp from "./screens/WeatherApp";
import Todo from "./screens/Todo";
import Test from "./screens/Test";
import StarRating from "./screens/StarRating";
import { ThemeProvider } from "./components/ThemeContext";
import ProgressBar from "./screens/ProgressBar";
function App() {
  return (
    <div className="App">

      <Router>
        <ThemeProvider>
          <MyNavbar />
          <Routes>
            <Route path="/Test" element={<Test />} />
            <Route path="/WeatherApp" element={<WeatherApp />} />
            <Route path="/Todo" element={<Todo />} />
            <Route path="/star-rating" element={<StarRating/>} />
            <Route path="/Progressbar" element={<ProgressBar/>} />
          </Routes>

        </ThemeProvider>

      </Router>

    </div>
  );
}

export default App;