import HeaderComponent from "./Header";
import LoginPage from "./loginPage";
import { useOkto } from 'okto-sdk-react';
import Image from "next/image";
const SellerPage = () => {
    const { isLoggedIn, logout } = useOkto();
    return (<>

        <HeaderComponent />

        <div className="flex h-screen ">

            <div className="w-1/2 flex justify-center items-center">
                {/* dummy image about Buying */}
                <Image src={`/sell.jpg`} alt=""  width={1000} height={1000}/>
            </div>
            <div className="w-1/2 flex justify-center items-center">

                {isLoggedIn ==true? "" : <LoginPage />}
            </div>
        </div>

    </>)
};

export default SellerPage;