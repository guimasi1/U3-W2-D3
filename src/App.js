import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import MyProfile from "./components/MyProfile";
import MySettings from "./components/MySettings";
import SearchMovie from "./components/SearchMovie";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="bg-secondary">
      {/* <MovieDetails /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/MySettings" element={<MySettings />} />
        <Route path="/SearchMovie" element={<SearchMovie />} />
        <Route path="/MovieDetails/:movieId" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
