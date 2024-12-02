import HeaderComponent from "./Header";
import LoginPage from "./loginPage";
import { useOkto } from 'okto-sdk-react';
import Image from "next/image";
const BuyerPage = () => {
    const { isLoggedIn, logout } = useOkto();


    if (isLoggedIn) {

        return (<>


        </>);
    };
    return (<>

        <HeaderComponent />

        <div className="flex h-screen ">

            <div className="w-1/2 flex justify-center items-center">
                {/* dummy image about Buying */}
                <Image src={`/buy.jpg`} alt="" width={1000} height={1000} />
            </div>
            <div className="w-1/2 flex justify-center items-center">

                {isLoggedIn ? "" : <LoginPage />}
            </div>
        </div>

    </>)
};




export default BuyerPage;
