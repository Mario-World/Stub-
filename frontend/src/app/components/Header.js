import Link from 'next/link';
import LoginPage from './loginPage';
import useUserDetails from "./store";


const HeaderComponent = ({ setPresentPage }) => {
    const token = useUserDetails((state) => state.token);

    return (
        <>
            <header className="bg-gray-800 text-white py-4 shadow-md px-5">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-xl font-bold">

                        <Link href={'/'}> Stub</Link>
                    </div>

                    <div className="flex space-x-6">


                        {token && <Link href={'/profile'} className=''> Profile</Link>}
                        <div> <LoginPage /></div>

                    </div>



                </div>
            </header>
        </>
    );
};

export default HeaderComponent;
