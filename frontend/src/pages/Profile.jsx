import React from 'react'

export default function Profile({user,setUser}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Profile</h1>
        <h2 className="text-xl text-gray-800">{user.userData.name}</h2>
        <h2 className="text-gray-600 mb-6">{user.userData.email}</h2>
        <button
          onClick={()=>{
            localStorage.removeItem("user");
            setUser(null);
          }}
          className="inline-flex justify-center items-center rounded-md bg-red-600 px-4 py-2 text-white font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Logout
        </button>
      </div>
    </div>
  )
}
