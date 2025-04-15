import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Context/CartContext.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { Bounce, ToastContainer } from "react-toastify";

// Make sure the redirect_uri matches what you added to Auth0's Allowed Callback URLs
const redirectUri = window.location.origin;

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-yfzi7kdprn128ubs.us.auth0.com"
        clientId="mpRouzMlsbCUrhbaRETdInabQEOqd7yW"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
      </Auth0Provider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </BrowserRouter>
  </CartProvider>
);
