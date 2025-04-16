import React from "react";
import { toast, Bounce } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";
import { useLocation, NavLink } from "react-router-dom";

function Payment() {
  let transaction_uuid = uuidv4();
  const location = useLocation();
  let total_amount = location.state?.totalPrice || 0;

  if (!total_amount) {
    return <p>Error: No total price found. Please try again.</p>;
  }

  let Message = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`;
  let hash = CryptoJS.HmacSHA256(Message, "8gBm/:&EnhH.1/q");
  let hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

  const successData = {
    status: "Success",
    total_amount,
    transaction_code: transaction_uuid,
  };
  localStorage.setItem("paymentSuccess", JSON.stringify(successData));

  return (
    <div className="pt-32">
      <div className="pb-10">
        <form
          className="rounded-3xl shadow-2xl font-serif shadow-gray-800 w-96 p-5 m-auto space-y-5 flex flex-col items-center"
          action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
          method="POST"
        >
          <input type="hidden" name="amount" value={total_amount} />
          <input type="hidden" name="tax_amount" value="0" />
          <input type="hidden" name="total_amount" value={total_amount} />
          <input type="hidden" name="transaction_uuid" value={transaction_uuid} />
          <input type="hidden" name="product_code" value="EPAYTEST" />
          <input type="hidden" name="product_service_charge" value="0" />
          <input type="hidden" name="product_delivery_charge" value="0" />
          <input
            type="hidden"
            name="success_url"
            value="https://giri-furni.vercel.app/success"
          />
          <input
            type="hidden"
            name="failure_url"
            value="https://giri-furni.vercel.app/failure"
          />
          <input
            type="hidden"
            name="signed_field_names"
            value="total_amount,transaction_uuid,product_code"
          />
          <input type="hidden" name="signature" value={hashInBase64} />

          <p className="text-2xl font-serif font-semibold">
            Total Price:- Rs {total_amount}
          </p>
          <input
            className="bg-green-500 text-white p-2 w-20 rounded-2xl"
            value="Submit"
            type="submit"
          />
          <NavLink to="/shop">
            <button
              className="bg-red-600 p-2 w-20 text-white rounded-2xl"
              onClick={() => {
                toast.error("🛑 Payment Cancelled!", {
                  position: "top-right",
                  autoClose: 500,
                  theme: "light",
                  transition: Bounce,
                });
              }}
            >
              Cancel
            </button>
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default Payment;
