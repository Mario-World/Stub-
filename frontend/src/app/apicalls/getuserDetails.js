import apiClient from "./axiosIntance";



const getUserDetails = async () => {

    try {

        let response = await apiClient.get(`https://sandbox-api.okto.tech/api/v1/user_from_token`, {});

        if (response.status == 200) {
            return response.data.data

        } else {
            throw Error('something went wrong when getting user details')

        }
    } catch (err) {
        console.error('Error fetching user details :', err.response?.data || err.message);
    }
}

export default getUserDetails;