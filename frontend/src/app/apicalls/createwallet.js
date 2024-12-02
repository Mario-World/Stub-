

import apiClient from "./axiosIntance";


const createWallet = async () => {
    try {
        const response = await apiClient.post('/wallet');
        console.log('Wallet created or fetched successfully:', response.data);
        if (response.status == 200 || response.status == 201) {
            return response.data.data.wallets;
        } else {
            throw Error('unable to creat wallet');
        }
    } catch (error) {
        console.error('Error creating wallet:', error.response?.data || error.message);
    }
};

export default createWallet;