import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { useForm } from "react-hook-form";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import Auth from "../../../firebase/firebase.config";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Register = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    // console.log(from)
    const Navigate = useNavigate()
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [userNow, loadingUser, errorUser] = useAuthState(Auth);
  if (userNow?.email) {
    return Navigate(from, { replace: true });
  }
//   console.log("current", userNow, loadingUser, errorUser);
  const { email, password } = errors;
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(Auth);
  console.log("create", user, loading, error);
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading || loadingUser) {
    return <p className="flex flex-col  items-center mx-auto"><span className="loading loading-spinner loading-lg"></span>Loading...</p>;
  }

  const onSubmit = (data) => {
    const { email, password } = data;
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/4 mx-auto space-y-5"
        >
             <h1 className="text-center text-2xl font-semibold">Register </h1>
        <label className="input input-bordered flex items-center gap-2">
          <MdOutlineDriveFileRenameOutline />

          <input type="text" className="grow" placeholder="Name" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            className="grow"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <p className="rounded-xl bg-red-500 px-2 text-white">
            {email?.type === "required" && <>required</>}
          </p>
        </label>
        {/* <label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
  <input type="text" className="grow" placeholder="Username" />
</label> */}
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            {...register("password", { required: true })}
            type="password"
            className="grow"
            placeholder="password"
          />
          <p className="rounded-xl bg-red-500 px-2 text-white">
            {password?.type === "required" && <>required</>}
          </p>
        </label>
     
        
       
        <p className="relative px-4 py-2 font-medium text-white group w-1/4 mx-auto">
<span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
<span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
<span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
<span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
<span className="relative"><input className="cursor-pointer" type="submit" /></span>
</p>

    <h1 className="flex gap-x-2">
        <p>Already have an Account?</p>
        <Link to="/login" className="text-blue-500 font-semibold">Login</Link>
    </h1>

      </form>
    </>
  );
};

export default Register;
