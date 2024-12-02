import { useEffect, useState } from "react";
import HeaderComponent from "./Header";
import useUserDetails from "./store";
import createWallet from "../apicalls/createwallet";
import getUserDetails from "../apicalls/getuserDetails";
const Homepage = () => {
    const setToken = useUserDetails((state) => state.setToken);
    const token = useUserDetails((state) => state.token);

    const removeToken = useUserDetails((state) => state.removeToken);
    const setWallets = useUserDetails((state) => state.setWallets);
    const setUserData = useUserDetails((state) => state.setUserData);


    useEffect(() => {
        const doSomething = async () => {


            let token = localStorage.getItem('token');
            setToken(token);

            let walletsData = await createWallet();
            setWallets(walletsData)
            let userData = await getUserDetails();
            setUserData(userData);
        }

        doSomething()
    }, [token])
    return (<>
        <HeaderComponent />

    </>)
}
export default Homepage;