
'use client'
import { OktoProvider, BuildType } from 'okto-sdk-react';
import LoginPage from "./components/loginPage";
import Homepage from './components/Homepage';


const OKTO_CLIENT_API_KEY = "09b58eee-c858-43db-aed8-8333051db59d";
export default function Home() {
  return (
    <>
      <OktoProvider apiKey={OKTO_CLIENT_API_KEY} buildType={BuildType.SANDBOX}>
        <Homepage />
      </OktoProvider>
    </>)
}
