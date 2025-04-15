import React, { useEffect, useState } from "react";

function Sucess() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("paymentSuccess");
    if (stored) {
      setInfo(JSON.parse(stored));
      localStorage.removeItem("paymentSuccess"); // optional: clean up
    }
  }, []);

  if (!info) {
    return <div className="pt-44 text-center text-red-500">Invalid or missing payment data.</div>;
  }

  return (
    <div className="pt-44 min-h-screen bg-gray-100">
      <div className="shadow-2xl shadow-gray-700 w-96 bg-white rounded-xl m-auto mt-5 flex flex-col items-center p-6 space-y-4">
        <img
          src="https://shopogolic.net/ckfinder/userfiles/images/payment%20done.png"
          alt="Payment Success"
          className="w-32 h-32 object-contain"
        />
        <h2 className="text-xl font-semibold text-green-600">
          Payment Successful
        </h2>
      </div>

      <div className="w-96 bg-white rounded-xl shadow-md m-auto mt-6 p-6 space-y-3 text-gray-800">
        <h1 className="text-lg font-medium">
          Status:{" "}
          <span className="font-semibold text-green-600">{info?.status}</span>
        </h1>
        <h1 className="text-lg font-medium">
          Total Amount:{" "}
          <span className="font-semibold text-blue-600">
            Rs {info?.total_amount}
          </span>
        </h1>
        <h1 className="text-lg font-medium">
          Transaction Code:{" "}
          <span className="font-mono text-gray-700">
            {info?.transaction_code}
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Sucess;
