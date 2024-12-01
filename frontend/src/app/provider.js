import { GoogleOAuthProvider } from '@react-oauth/google';





const GOOGLE_CLIENT_ID = "1035187347903-k8o0bada0pqr2oi927tilsic5gih37pg.apps.googleusercontent.com"
const Provider = ({ children }) => {

    return (<>

        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            {children}
        </GoogleOAuthProvider>
    </>)
};

export default Provider;