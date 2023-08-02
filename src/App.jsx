import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Profile } from "./pages/Profile";
import { Offers } from "./pages/Offers";
import { Header } from "./component/Header";
function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element=<Home></Home>></Route>  
        <Route path="/profile" element=<Profile></Profile>></Route>  
        <Route path="/sign-in" element=<SignIn></SignIn>></Route>  
        <Route path="/sign-up" element=<SignUp></SignUp>></Route>  
        <Route path="/forgot-password" element=<ForgotPassword></ForgotPassword>></Route>  
        <Route path="/offers" element=<Offers></Offers>></Route>  
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App