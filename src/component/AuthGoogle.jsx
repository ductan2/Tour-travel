import googleIcon from "../assets/icon-google.svg";
export const AuthGoogle = () => {
   return (
      <button className="bg-[#fefefe] relative  color-[#666] border-[1px] border-[##c6d2d9]  ease-in-out hover:opacity-80 shadow-lg font-semibold 
      w-full py-3 rounded-lg">
         <img
            src={googleIcon}
            className="absolute top-[50%] left-5 -translate-y-[50%]"
            alt=""
         />{" "}
         Continue with Google
      </button>
   );
};
