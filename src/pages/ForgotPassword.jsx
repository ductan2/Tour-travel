import { Link } from "react-router-dom";
import bg from "../assets/day66travelx2.png";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { Loading } from "../component/Loading";

export const ForgotPassword = () => {
   const [email, setEmail] = useState("");
   const handleSetValue = (e) => {
      setEmail(e.target.value);
   };
   const [isLoading,setIsLoading]=useState(false);
   const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true)
      const auth = getAuth();
      if (email === "") {
         setIsLoading(false);
         toast.error("Email can't be empty!"); return ;
         
      }
      sendPasswordResetEmail(auth, email)
         .then(() => {
            setIsLoading(false)
            toast.success("Email was sent")
            
         })
         .catch((error) => {
            console.log(error);
            setIsLoading(false)
            toast.error("Email is not found!");
         });
   };

   return (
      <section>
         <h1 className="text-3xl text-center mt-20 font-bold text-[#007549]">
            Forget Password
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
                        value={email}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email address"
                        onChange={(e) => handleSetValue(e)}
                     />
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
                  </div>
                  <button className="bg-[#029664] ease-in-out hover:opacity-80 shadow-lg text-white font-semibold w-full mt-14 py-3 rounded-lg">
                     {!isLoading ? " Send to email" :<Loading></Loading>}
                  </button>
               </form>
            </div>
         </div>
      </section>
   );
};
