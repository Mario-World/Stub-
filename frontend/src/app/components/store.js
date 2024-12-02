import { create } from 'zustand';

const useUserDetails = create((set) => ({
  wallets: [],
  token: null,
  userData: null,

  // Token management methods
  setToken: (newToken) => set(() => ({ token: newToken })),
  removeToken: () => set(() => ({ token: null })),

  // Wallet management methods
  clearWallets: () => set(() => ({ wallets: [] })),
  setWallets: (newWallets) => set(() => ({ wallets: newWallets })),

  //user management

  setUserData: (userData) => set(() => ({ userData: userData })),
  clearState: () =>
    set(() => ({
      wallets: [],
      token: null,
      userData: null
    })),
}));

export default useUserDetails;
