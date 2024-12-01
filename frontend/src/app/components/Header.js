import Link from 'next/link';
import { useOkto } from 'okto-sdk-react';

const HeaderComponent = () => {


    const { isLoggedIn,  logOut} = useOkto();

    const handleLogout = async () => {

         await logOut();
    }

    return (
        <>
            <header className="bg-gray-800 text-white py-4 shadow-md px-5">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-xl font-bold">

                        <Link href={'/'}> Stub</Link>
                    </div>
                    <div className="flex space-x-6">
                        <div>
                            <Link href={'/buyer'} className="hover:text-gray-300 transition">
                                Buyer
                            </Link>
                        </div>
                        <div>
                            <Link href={'/seller'} className="hover:text-gray-300 transition">
                                Seller
                            </Link>
                        </div>
                        {isLoggedIn == true ? <button onClick={handleLogout} className=''> Log out</button> : <></>}

                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderComponent;
