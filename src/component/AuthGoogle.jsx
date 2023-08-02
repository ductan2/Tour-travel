import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import googleIcon from "../assets/icon-google.svg";
import { toast } from "react-toastify";
import { db } from "../config/firebase";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
// import { toast } from "react-toastify";
export const AuthGoogle = () => {
   const navigate = useNavigate();
   const loginGoogle = async () => {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
         .then(async (result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.

            const user = result.user;
            const docRef = doc(db, "users", user.uid);
            const isDoc = await getDoc(docRef);
            if (!isDoc.exists()) {
               await setDoc(docRef, {
                  name: user.displayName,
                  email: user.email,
                  timestamp: serverTimestamp(),
               });
            }
            toast.success("Login Succesfully!");
            navigate("/");
         })
         .catch((error) => {
            console.log(error);
            toast.error("You could not give permission with google!");
         });
   };
   return (
      <button
         type="button"
         onClick={() => loginGoogle()}
         className="bg-[#fefefe] relative  color-[#666] border-[1px] border-[##c6d2d9]  ease-in-out hover:opacity-80 shadow-lg font-semibold 
      w-full py-3 rounded-lg"
      >
         <img
            src={googleIcon}
            className="absolute top-[50%] left-5 -translate-y-[50%]"
            alt=""
         />{" "}
         Continue with Google
      </button>
   );
};
