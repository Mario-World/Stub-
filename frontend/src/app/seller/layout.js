
"use client"
import { OktoProvider, BuildType } from 'okto-sdk-react';
const OKTO_CLIENT_API_KEY = "09b58eee-c858-43db-aed8-8333051db59d";

const Layout = ({ children }) => {

    return (<>

        <OktoProvider apiKey={OKTO_CLIENT_API_KEY} buildType={BuildType.SANDBOX}>
            {children}
        </OktoProvider>
    </>)
}
export default Layout;