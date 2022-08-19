import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";
import { TourismGuide } from "./pages/TourismGuide";
import { TourismRoutes } from "./pages/TourismRoutes";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
      <Route path="/guide" element={<TourismGuide />} />
      <Route path="/routes" element={<TourismRoutes />} />
    </Routes>
  ) 
}