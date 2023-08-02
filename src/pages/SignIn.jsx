import { useState } from "react";
import bg from "../assets/day66travelx2.png";

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthGoogle } from "../component/AuthGoogle";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { Loading } from "../component/Loading";

export const SignIn = () => {
   const [formData, setFormData] = useState({
      email: "",
      password: "",
   });
   const [showPassword, setShowPassword] = useState(true);
   const { email, password } = formData;
   const [isLoading, setIsLoading] = useState(false);

   const navigate = useNavigate();

   const handleSetValue = (e) => {
      setFormData((prevstate) => ({
         ...prevstate,
         [e.target.name]: e.target.value,
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (email === "" || password === "") {
         toast.error("Fields is not empty!");
         return ;
      }
      setIsLoading(true);
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            if (user) {
               setTimeout(() => {
                  toast.success("Login successfully!");
                  setIsLoading(false);
                  navigate("/");
               }, 1000);
            }
         })
         .catch((error) => {
            console.log(error);
            toast.error("Login failure");
            setIsLoading(false);
         });
   };

   return (
      <section>
         <h1 className="text-3xl text-center mt-20 font-bold text-[#007549]">
            Sign in
         </h1>
         <div className="flex justify-center items-center flex-wrap md:px-10 py-10 max-w-6xl mx-auto">
            <div className="w-full md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
               <img src={bg} alt="" className="w-full rounded-lg" />
            </div>
            <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-10 p-5">
               <h1 className="text-2xl font-semibold mb-10 text-[#029664]">
                  Welcome Back!
               </h1>
               <form
                  action=""
                  onSubmit={handleSubmit}
                  className="text-base font-semibold"
               >
                  <div className="form-control mb-5 ">
                     <label htmlFor="email">Email</label>
                     <input
                        className="w-full mt-2 px-5 py-2 border-[1px] outline-none ease-in-out focus-visible:border-green-400  rounded-lg"
                        value={formData.email}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email address"
                        onChange={(e) => handleSetValue(e)}
                     />
                  </div>
                  <div className="form-control mb-5 relative">
                     <label htmlFor="password">Password</label>
                     <input
                        className="w-full mt-2 px-5 py-2 border-[1px] outline-none ease-in-out focus-visible:border-green-400 rounded-lg"
                        value={formData.password}
                        type={`${showPassword ? "password" : "text"}`}
                        name="password"
                        id="password"
                        placeholder="Password"
                        onChange={(e) => handleSetValue(e)}
                     />
                     <div
                        className="absolute bottom-[30%] translate-y-[55%] right-5"
                        onClick={() => setShowPassword(!showPassword)}
                     >
                        {!showPassword ? (
                           <AiFillEyeInvisible></AiFillEyeInvisible>
                        ) : (
                           <AiFillEye></AiFillEye>
                        )}
                     </div>
                  </div>
                  <div className="flex justify-between">
                     <p>
                        Don&apos;t have a account?{" "}
                        <Link
                           to={"/sign-up"}
                           className="text-red-500 underline"
                        >
                           Register
                        </Link>
                     </p>
                     <p className="text-[#029664] underline">
                        <Link to={"/forgot-password"}>Forgot password?</Link>
                     </p>
                  </div>
                  <button className="bg-[#029664] ease-in-out hover:opacity-80 shadow-lg text-white font-semibold w-full mt-14 py-3 rounded-lg">
                     {!isLoading ? "Login" : <Loading></Loading>}
                  </button>
                  <div className="flex items-center justify-center line my-5">
                     <span className="text-center font-semibold px-1">OR</span>
                  </div>
                  <AuthGoogle></AuthGoogle>
               </form>
            </div>
         </div>
      </section>
   );
};
