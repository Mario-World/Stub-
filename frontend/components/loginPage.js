import React, { useState } from "react";
import { useOkto } from "okto-sdk-react";
import { GoogleLogin } from "@react-oauth/google";

function LoginPage() {
const { authenticate } = useOkto();
const [authToken, setAuthToken] = useState(null);

const handleGoogleLogin = async (credentialResponse) => {
 const idToken = credentialResponse.credential;

 console.log(credentialResponse)
//   authenticate(idToken, (authResponse, error) => {

//     console.log(authResponse)
//       if (authResponse) {
//         setAuthToken(authResponse.auth_token);
//         console.log("Authenticated successfully, auth token:", authResponse.auth_token);
//       } else if (error) {
//             console.error("Authentication error:", error);
//         }
//     });
 };

 return (
    <div>
        {!authToken ? (
        <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={(error) => console.error("Login Failed", error)}
        />
        ) : (
            <p>Authenticated</p>
        )}
    </div>
    );
}

export default LoginPage;