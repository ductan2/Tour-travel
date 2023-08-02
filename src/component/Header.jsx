import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo.png"

export const Header = () => {
   const location = useLocation(); // get slug
   
   function checkActiveUrl(item) {
      return item === location.pathname;
   }

   return (
      <div className="bg-white shadow-md sticky top-0 z-999">
         <header className="flex justify-between items-center px-3 max-w-[1280px] mx-auto h-16 text-base">
            <div>
            
               <Link to={"/"} className="flex items-center gap-3 ">
                 <img
                     src={logo}
                     alt="logo"
                     className="cursor-pointer"
                  />
                  <span className="font-bold text-2xl text-[#355B3E]">Travalize</span>
               </Link>
            </div>
            <div>
               <ul className="flex gap-7 text-gray-400 font-semibold">
                  <li
                     className={`${
                        checkActiveUrl("/") &&
                        "text-black border-b-2 border-red-500"
                     }`}
                  >
                     <Link to={"/"}>Home</Link>
                  </li>
                  <li
                     className={`${
                        checkActiveUrl("/offers") &&
                        "text-black border-b-2 border-red-500"
                     }`}
                  >
                     <Link to={"/offers"}>Offers</Link>
                  </li>
                  <li
                     className={`${
                        checkActiveUrl("/sign-in") &&
                        "text-black border-b-2 border-red-500"
                     }`}
                  >
                     <Link to={"/sign-in"}> Sign in </Link>
                  </li>
               </ul>
            </div>
         </header>
      </div>
   );
};
