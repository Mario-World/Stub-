
'use client'

import HeaderComponent from "@/app/components/Header";
import useUserDetails from "../components/store";

const Profile = () => {
    let wallets = useUserDetails((state) => (state.wallets));
    let userDetails = useUserDetails((state) => (state.userData))
    return (<>

        <HeaderComponent />

        {console.log(wallets)}
        {console.log(useUserDetails)}

    </>)
}


export default Profile;