import axios from 'axios';
const authenticate = async (googleIdtoken) => {
    try {
        const response = await axios.post(
            'https://sandbox-api.okto.tech/api/v2/authenticate',
            {
                id_token: googleIdtoken
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': process.env.NEXT_PUBLIC_OKTO_ID_TOKEN
                }
            }
        );

        if (response.status = 201) {
            console.log(response?.data?.data?.auth_token, 'token');
            localStorage.setItem('token', response?.data?.data?.auth_token);
            return response?.data?.data?.auth_token;
        } else {
            throw Error("authentication failed");
        }
    } catch (error) {
        console.error('Error authenticating:', error.response?.data || error.message);
    }
};

export default authenticate;