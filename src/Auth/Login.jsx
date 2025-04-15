import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Please <span className="text-orange-700">Login</span> With Google
        </h2>
        <button
          onClick={() => loginWithRedirect()}
          type="button"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200 flex items-center justify-center gap-2"
        >
          <FcGoogle size={24} />
          <span>Login With Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
