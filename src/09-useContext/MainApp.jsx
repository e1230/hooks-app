import { Route, Routes } from "react-router-dom";
import { HomePage } from '../09-useContext/HomePage';
import { LoginPage } from '../09-useContext/LoginPage';
import { AboutPage } from '../09-useContext/AboutPage';
import { NavBar } from "./NavBar";
import { UserProvider } from "./context/UserProvider";
export const MainApp = () => {
  return (
    <UserProvider>
        <NavBar />
        <hr />

        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='/*' element={<LoginPage />} />
        </Routes>
    </UserProvider>
  )
}
