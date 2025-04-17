import react from "react";

const MyGPTs = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">My GPTs</h1>
      <p className="text-gray-600 mb-8">Manage your custom GPTs here.</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Create New GPT
      </button>
    </div>
  );
};
