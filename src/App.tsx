import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/Home.tsx";
import SessionsList from "./pages/SessionList/SessionsList.tsx";
import Session from "./pages/Session/Session.tsx";
import NavBar from "./components/UI/NavBar/NavBar.tsx";
import BookingProvider from "./context/Booking/bookingContext.tsx";

const App = () => {
  return (
    <BookingProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/sessions" element={<SessionsList />} />
          <Route path="/sessions/:id" element={<Session />} />
        </Routes>
      </BrowserRouter>
    </BookingProvider>
  );
};

export default App;
