import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { auth } from "../firebase.config";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser, deleteUser } from "../redux/bazarSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleGoogleLogin(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        dispatch(
          addUser({
            id: user.uid,
            name: user.displayName,
            image: user.photoURL,
            email: user.email,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSignout(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    signOut(auth)
      .then(() => {
        toast.success("Log out successfully ");
        dispatch(deleteUser());
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="py-12 flex flex-col">
      <div
        onClick={handleGoogleLogin}
        className="flex items-center gap-3 justify-center py-12 h-8 w-full "
      >
        <div className="flex items-center justify-center gap-8 cursor-pointer border-[1px] rounded-md hover:border-blue-600 duration-200 h-14 w-64">
          <FcGoogle size={40} className="" />
          <span className="text-sm text-gray-500">Sign in with Google</span>
        </div>
      </div>
      <div className="flex items-center gap-3 justify-center py-12 h-8 w-full ">
        <div className="flex items-center justify-center gap-8 cursor-pointer h-14 w-64 border-[1px] rounded-md hover:border-blue-600 duration-200">
          <FaGithub size={40} className="" />
          <span className="text-sm text-gray-500">Sign in with GitHub</span>
        </div>
      </div>
      <div className="py-12 h-8  w-full flex items-center justify-center">
        <button
          onClick={handleSignout}
          className="py-2 bg-black hover:bg-white hover:text-black duration-300 w-52 rounded-md text-white text-lg"
        >
          Sign Out
        </button>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Login;
