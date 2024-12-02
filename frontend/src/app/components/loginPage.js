
import { useState } from "react";
import { useOkto } from "okto-sdk-react";

import { GoogleLogin } from "@react-oauth/google";
import authenticate from "../apicalls/authenticate";

import createWallet from "../apicalls/createwallet";
import useUserDetails from "./store";
import getUserDetails from "../apicalls/getuserDetails";
function LoginPage() {

    const setToken = useUserDetails((state) => state.setToken);
    const token = useUserDetails((state) => state.token);
    const removeToken = useUserDetails((state) => state.removeToken);
    const setWallets = useUserDetails((state) => state.setWallets);
    const setUserData = useUserDetails((state) => state.setUserData);

    const handleGoogleLogin = async (credentialResponse) => {
        const idToken = credentialResponse.credential;
        let token = await authenticate(idToken);

        if (token) {
            setToken(token);
        }
        let walletsData = await createWallet();
        setWallets(walletsData)
        let userData = await getUserDetails();
        setUserData(userData);

    };

    return (
        <>
            {!token ? (
                <GoogleLogin
                    onSuccess={handleGoogleLogin}
                    onError={(error) => console.error("Login Failed", error)}
                />
            ) : (
                <button onClick={() => { removeToken(), localStorage.clear() }}> Log out</button>
            )}
        </>
    );
}

export default LoginPage;