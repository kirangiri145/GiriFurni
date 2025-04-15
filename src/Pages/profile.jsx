import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold text-red-500">You are not logged in.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        <img
          src={user.picture}
          alt={user.name}
          className="w-28 h-28 mx-auto rounded-full border-4 border-blue-500 mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
        <p className="text-gray-600 text-sm mt-2">{user.email}</p>

        <div className="mt-6 space-y-2 text-left text-sm text-gray-700">
          {user.given_name && <p><strong>First Name:</strong> {user.given_name}</p>}
          {user.family_name && <p><strong>Last Name:</strong> {user.family_name}</p>}
          <p><strong>Nickname:</strong> {user.nickname}</p>
          <p><strong>Locale:</strong> {user.locale || "N/A"}</p>
          <p><strong>Updated:</strong> {new Date(user.updated_at).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
